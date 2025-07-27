#!/usr/bin/env python3
"""
Backend API Testing Script for NK Board Game Application
Tests FastAPI backend server functionality, MongoDB connection, and API endpoints
"""

import requests
import json
import os
import sys
from datetime import datetime
import time

# Load environment variables
sys.path.append('/app/frontend')
from dotenv import load_dotenv

# Load frontend .env to get the backend URL
load_dotenv('/app/frontend/.env')
BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL')

if not BACKEND_URL:
    print("❌ ERROR: REACT_APP_BACKEND_URL not found in frontend/.env")
    sys.exit(1)

API_BASE_URL = f"{BACKEND_URL}/api"

class BackendTester:
    def __init__(self):
        self.test_results = []
        self.passed = 0
        self.failed = 0
        
    def log_test(self, test_name, passed, message=""):
        status = "✅ PASS" if passed else "❌ FAIL"
        result = f"{status}: {test_name}"
        if message:
            result += f" - {message}"
        print(result)
        
        self.test_results.append({
            'test': test_name,
            'passed': passed,
            'message': message,
            'timestamp': datetime.now().isoformat()
        })
        
        if passed:
            self.passed += 1
        else:
            self.failed += 1
    
    def test_server_health(self):
        """Test if the FastAPI server is running and responding"""
        print("\n🔍 Testing Server Health...")
        try:
            response = requests.get(f"{API_BASE_URL}/", timeout=10)
            if response.status_code == 200:
                data = response.json()
                if data.get("message") == "Hello World":
                    self.log_test("Server Health Check", True, "Server responding correctly")
                    return True
                else:
                    self.log_test("Server Health Check", False, f"Unexpected response: {data}")
                    return False
            else:
                self.log_test("Server Health Check", False, f"HTTP {response.status_code}")
                return False
        except requests.exceptions.RequestException as e:
            self.log_test("Server Health Check", False, f"Connection error: {str(e)}")
            return False
    
    def test_status_endpoints(self):
        """Test the status check API endpoints"""
        print("\n🔍 Testing Status API Endpoints...")
        
        # Test GET /status (should return empty list initially)
        try:
            response = requests.get(f"{API_BASE_URL}/status", timeout=10)
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("GET /status endpoint", True, f"Returned {len(data)} status checks")
                else:
                    self.log_test("GET /status endpoint", False, "Response is not a list")
                    return False
            else:
                self.log_test("GET /status endpoint", False, f"HTTP {response.status_code}")
                return False
        except requests.exceptions.RequestException as e:
            self.log_test("GET /status endpoint", False, f"Connection error: {str(e)}")
            return False
        
        # Test POST /status (create a new status check)
        try:
            test_data = {
                "client_name": "NK Board Game Test Client"
            }
            response = requests.post(f"{API_BASE_URL}/status", 
                                   json=test_data, 
                                   headers={"Content-Type": "application/json"},
                                   timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ['id', 'client_name', 'timestamp']
                if all(field in data for field in required_fields):
                    if data['client_name'] == test_data['client_name']:
                        self.log_test("POST /status endpoint", True, f"Created status check with ID: {data['id']}")
                        return True
                    else:
                        self.log_test("POST /status endpoint", False, "Client name mismatch")
                        return False
                else:
                    missing_fields = [f for f in required_fields if f not in data]
                    self.log_test("POST /status endpoint", False, f"Missing fields: {missing_fields}")
                    return False
            else:
                self.log_test("POST /status endpoint", False, f"HTTP {response.status_code}: {response.text}")
                return False
        except requests.exceptions.RequestException as e:
            self.log_test("POST /status endpoint", False, f"Connection error: {str(e)}")
            return False
    
    def test_data_persistence(self):
        """Test if data persists in MongoDB by creating and retrieving status checks"""
        print("\n🔍 Testing Data Persistence...")
        
        # Create a test status check
        test_data = {
            "client_name": "NK Persistence Test"
        }
        
        try:
            # Create status check
            create_response = requests.post(f"{API_BASE_URL}/status", 
                                          json=test_data,
                                          headers={"Content-Type": "application/json"},
                                          timeout=10)
            
            if create_response.status_code != 200:
                self.log_test("Data Persistence", False, "Failed to create test data")
                return False
            
            created_data = create_response.json()
            created_id = created_data['id']
            
            # Retrieve all status checks
            get_response = requests.get(f"{API_BASE_URL}/status", timeout=10)
            
            if get_response.status_code != 200:
                self.log_test("Data Persistence", False, "Failed to retrieve data")
                return False
            
            all_status_checks = get_response.json()
            
            # Check if our created data exists
            found_data = None
            for status_check in all_status_checks:
                if status_check['id'] == created_id:
                    found_data = status_check
                    break
            
            if found_data:
                if found_data['client_name'] == test_data['client_name']:
                    self.log_test("Data Persistence", True, f"Data persisted correctly with ID: {created_id}")
                    return True
                else:
                    self.log_test("Data Persistence", False, "Data corrupted during persistence")
                    return False
            else:
                self.log_test("Data Persistence", False, "Created data not found in database")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Data Persistence", False, f"Connection error: {str(e)}")
            return False
    
    def test_cors_configuration(self):
        """Test CORS configuration"""
        print("\n🔍 Testing CORS Configuration...")
        
        try:
            # Make a proper preflight OPTIONS request to check CORS headers
            headers = {
                'Origin': 'http://localhost:3000',
                'Access-Control-Request-Method': 'POST',
                'Access-Control-Request-Headers': 'Content-Type'
            }
            response = requests.options(f"{API_BASE_URL}/", headers=headers, timeout=10)
            
            # Check if CORS headers are present
            cors_headers = [
                'access-control-allow-origin',
                'access-control-allow-methods',
                'access-control-allow-headers'
            ]
            
            present_headers = []
            for header in cors_headers:
                if header in response.headers:
                    present_headers.append(header)
            
            if len(present_headers) >= 2:  # At least origin and methods should be present
                self.log_test("CORS Configuration", True, f"CORS headers present: {present_headers}")
                return True
            else:
                self.log_test("CORS Configuration", False, f"Missing CORS headers. Present: {present_headers}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("CORS Configuration", False, f"Connection error: {str(e)}")
            return False
    
    def test_error_handling(self):
        """Test API error handling"""
        print("\n🔍 Testing Error Handling...")
        
        # Test invalid endpoint
        try:
            response = requests.get(f"{API_BASE_URL}/nonexistent", timeout=10)
            if response.status_code == 404:
                self.log_test("404 Error Handling", True, "Returns 404 for invalid endpoints")
            else:
                self.log_test("404 Error Handling", False, f"Expected 404, got {response.status_code}")
        except requests.exceptions.RequestException as e:
            self.log_test("404 Error Handling", False, f"Connection error: {str(e)}")
        
        # Test invalid POST data
        try:
            invalid_data = {"invalid_field": "test"}
            response = requests.post(f"{API_BASE_URL}/status", 
                                   json=invalid_data,
                                   headers={"Content-Type": "application/json"},
                                   timeout=10)
            
            if response.status_code in [400, 422]:  # FastAPI returns 422 for validation errors
                self.log_test("Validation Error Handling", True, f"Returns {response.status_code} for invalid data")
            else:
                self.log_test("Validation Error Handling", False, f"Expected 400/422, got {response.status_code}")
        except requests.exceptions.RequestException as e:
            self.log_test("Validation Error Handling", False, f"Connection error: {str(e)}")
    
    def run_all_tests(self):
        """Run all backend tests"""
        print("🚀 Starting NK Board Game Backend API Tests")
        print(f"📍 Testing backend at: {API_BASE_URL}")
        print("=" * 60)
        
        # Run tests in order
        server_healthy = self.test_server_health()
        
        if server_healthy:
            self.test_status_endpoints()
            self.test_data_persistence()
            self.test_cors_configuration()
            self.test_error_handling()
        else:
            print("\n⚠️  Skipping remaining tests due to server health check failure")
        
        # Print summary
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        print(f"✅ Passed: {self.passed}")
        print(f"❌ Failed: {self.failed}")
        print(f"📈 Success Rate: {(self.passed / (self.passed + self.failed) * 100):.1f}%" if (self.passed + self.failed) > 0 else "No tests run")
        
        if self.failed == 0:
            print("\n🎉 All backend tests passed! Backend is stable and ready.")
            return True
        else:
            print(f"\n⚠️  {self.failed} test(s) failed. Backend needs attention.")
            return False

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    
    # Exit with appropriate code
    sys.exit(0 if success else 1)