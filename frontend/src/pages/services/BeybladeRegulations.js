import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, ChevronUp } from "lucide-react";
import SEOHead from "../../components/SEOHead";

const S3 = "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com";

/* ── Helpers ─────────────────────────────────────────── */

const RegImage = ({ src, alt }) => (
  <div className="my-6 text-center">
    <img src={src} alt={alt} className="mx-auto rounded-xl border border-gray-200 shadow max-w-full" />
  </div>
);

const Section = ({ id, titleTh, titleEn, isEnglish, children, color }) => {
  const [open, setOpen] = useState(true);
  const H = {
    blue:   ["bg-blue-700",   "border-blue-500",   "bg-blue-50"],
    indigo: ["bg-indigo-700", "border-indigo-500", "bg-indigo-50"],
    green:  ["bg-green-700",  "border-green-500",  "bg-green-50"],
    amber:  ["bg-amber-600",  "border-amber-500",  "bg-amber-50"],
    orange: ["bg-orange-600", "border-orange-500", "bg-orange-50"],
    teal:   ["bg-teal-700",   "border-teal-500",   "bg-teal-50"],
    purple: ["bg-purple-700", "border-purple-500", "bg-purple-50"],
    red:    ["bg-red-700",    "border-red-500",    "bg-red-50"],
    sky:    ["bg-sky-700",    "border-sky-500",    "bg-sky-50"],
    pink:   ["bg-pink-700",   "border-pink-500",   "bg-pink-50"],
    gray:   ["bg-gray-700",   "border-gray-400",   "bg-gray-50"],
  };
  const [hdr, bdr, bg] = H[color] || H.blue;
  return (
    <section id={id} className="mb-5">
      <button onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-5 py-3 rounded-t-xl text-white font-bold text-base text-left ${hdr}`}>
        <span>{isEnglish ? titleEn : titleTh}</span>
        {open ? <ChevronUp className="w-5 h-5 flex-shrink-0 ml-2" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 ml-2" />}
      </button>
      {open && <div className={`border-l-4 rounded-b-xl px-6 py-5 ${bdr} ${bg}`}>{children}</div>}
    </section>
  );
};

/* Rule uses children — avoids JSX attribute double-quote escaping issues */
const Rule = ({ n, children }) => (
  <div className="flex gap-3 mb-4 last:mb-0">
    <span className="flex-shrink-0 font-bold text-gray-400 w-7 text-right pt-0.5">[{n}]</span>
    <div className="text-gray-800 leading-relaxed text-sm">{children}</div>
  </div>
);

const SubBlock = ({ label, items }) => (
  <div className="mt-3 bg-white bg-opacity-60 rounded-lg p-3">
    <p className="font-semibold text-gray-700 text-sm mb-1">{label}</p>
    <ul className="space-y-1 pl-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-sm text-gray-700">
          <span className="text-gray-400 flex-shrink-0">•</span><span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

/* ── Main Component ───────────────────────────────────── */

const BeybladeRegulations = () => {
  const { i18n } = useTranslation();
  const isEnglish = (i18n.language || "th") === "en";
  const T = (th, en) => isEnglish ? en : th;

  const toc = [
    { id: "s1",  th: "เกี่ยวกับ Beyblade",                  en: "About Beyblade" },
    { id: "s2",  th: "การตรวจสอบ Bey",                      en: "Bey Checks" },
    { id: "s3",  th: "การตรวจสอบ Launcher",                 en: "Launcher Checks" },
    { id: "s4",  th: "เกี่ยวกับ Stadium",                   en: "The Stadium" },
    { id: "s5",  th: "Xtreme Stadium",                       en: "Xtreme Stadium" },
    { id: "s6",  th: "Wide Xtreme Stadium",                  en: "Wide Xtreme Stadium" },
    { id: "s7",  th: "Infinity Stadium",                     en: "Infinity Stadium" },
    { id: "s8",  th: "วิธีการยิง",                          en: "Shooting Method" },
    { id: "s9",  th: "เกี่ยวกับการต่อสู้",                  en: "Battle" },
    { id: "s10", th: "ผลการต่อสู้",                         en: "Battle Results" },
    { id: "s11", th: "ผลการแข่งขันแบบ 3 ต่อ 3",            en: "3on3 Battles" },
    { id: "s12", th: "ผลการแข่งขันแบบ 3 Blader",           en: "3-Blader Battles" },
    { id: "s13", th: "ผลการแข่งขันแบบทีม",                 en: "Team Battles" },
    { id: "s14", th: "อื่น ๆ",                              en: "Others" },
  ];

  return (
    <div className="beyblade-regulations-page">
      <SEOHead
        title={T("กติกา Beyblade X Asia ฉบับที่ 12 – NK Board Game",
                  "Beyblade X Regulations Asia 12th Edition – NK Board Game")}
        description={T("กติกาการแข่งขัน Beyblade X อย่างเป็นทางการ Asia Version ฉบับที่ 12 (มีนาคม 2026)",
                       "Official Beyblade X Tournament Regulations Asia Version 12th Edition (March 2026)")}
        keywords={T("กติกา Beyblade X, กติกาการแข่งขัน, Asia ฉบับที่ 12",
                    "Beyblade X Regulations, Tournament Rules, Asia 12th Edition")}
      />

      {/* Hero */}
      <section className="hero-section regulations-hero">
        <div className="hero-content">
          <div className="hero-badge">{T("กติกาอย่างเป็นทางการ", "Official Rules")}</div>
          <h1 className="hero-title">{T("กติกาการแข่งขัน Beyblade X", "Beyblade X Tournament Regulations")}</h1>
          <p className="hero-subtitle">{T("Asia Version · ฉบับที่ 12 · มีนาคม 2026", "Asia Version · 12th Edition · March 2026")}</p>
          <div className="hero-actions">
            <a href="/beyblade" className="btn btn-secondary btn-lg">{T("← กลับหน้า Beyblade", "← Back to Beyblade")}</a>
          </div>
        </div>
      </section>

      {/* Definitions */}
      <div className="bg-gray-100 border-b border-gray-200 py-4 px-4">
        <div className="max-w-4xl mx-auto text-sm text-gray-700 space-y-1">
          <p><strong>{T("การต่อสู้ (Battle)", "Battle")}</strong>{" – "}
            {T("หน่วยที่เล็กที่สุดซึ่งผลลัพธ์ถูกกำหนดโดยการชนะหรือแพ้ใน Beyblade",
               "The smallest unit in which the outcome is determined by winning or losing in Beyblade.")}
          </p>
          <p><strong>{T("แมตช์ (Match)", "Match")}</strong>{" – "}
            {T("กระบวนการทำการต่อสู้หลายครั้งจนกว่าจะมีผู้ชนะ",
               "The process of conducting multiple battles until a winner is determined.")}
          </p>
        </div>
      </div>

      {/* TOC */}
      <div className="bg-blue-50 py-8 px-4 border-b border-blue-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-blue-800 mb-4">{T("สารบัญ", "Table of Contents")}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {toc.map(item => (
              <button key={item.id}
                onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="toc-item text-left text-sm">
                {isEnglish ? item.en : item.th}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* 1 */}
        <Section id="s1" titleTh="เกี่ยวกับ Beyblade" titleEn="About Beyblade" isEnglish={isEnglish} color="blue">
          <Rule n={1}>
            {T('BEYBLADE เพียงชนิดเดียวที่สามารถใช้ได้คือ BEYBLADE X Series (เรียกว่า "Bey" ต่อไปนี้) ซึ่งวางจำหน่ายอย่างเป็นทางการและจัดจำหน่ายตั้งแต่เดือนกรกฎาคม 2023 ห้ามใช้ Beys, launchers, stadiums หรืออุปกรณ์รุ่นก่อนหน้า',
               'The only BEYBLADE (referred to as "Bey" onwards) that can be used is the BEYBLADE X Series, which was officially released and distributed from July 2023. No previous Beys, launchers, stadiums, or tools may be used.')}
          </Rule>
          <Rule n={2}>
            {T('Beys ที่ถูกบรรจุเข้า "Hall of Fame" ไม่สามารถใช้ในการต่อสู้ที่ใช้ Bey เพียงชิ้นเดียว แต่สามารถใช้ในการต่อสู้ที่มีหลาย Beys เช่น การต่อสู้แบบ 3 ต่อ 3 และการต่อสู้แบบทีม',
               'Beys inducted in the "Hall of Fame" cannot be used in battles where only one Bey is used. They can be used in battles where multiple Beys are used, such as 3 on 3 battles and team battles.')}
          </Rule>
          <Rule n={3}>
            {T('การตัดสินใจทั้งหมดเกี่ยวกับการตรวจสอบ Bey และผลการต่อสู้ต้องปฏิบัติตามคำตัดสินของผู้ตัดสิน',
               "All decisions regarding Bey checks and battle outcomes must be followed according to the judge's rulings.")}
          </Rule>
          <Rule n={4}>
            {T('การดัดแปลงโดยไม่ได้รับอนุญาตหรือการโกงที่ถือว่าตั้งใจ อาจส่งผลให้ถูกตัดสิทธิ์',
               'Any unauthorized modifications or cheating deemed intentional may result in disqualification.')}
          </Rule>
        </Section>

        {/* 2 */}
        <Section id="s2" titleTh="เกี่ยวกับการตรวจสอบ Bey" titleEn="Regarding Bey Checks" isEnglish={isEnglish} color="indigo">
          <Rule n={1}>
            {T('อนุญาตให้ใช้เฉพาะชิ้นส่วนที่กำหนดเองโดยใช้ชิ้นส่วนอย่างเป็นทางการจาก "Beyblade X" series เท่านั้น',
               'Only customization using official parts from the "Beyblade X" series are allowed.')}
          </Rule>
          <Rule n={2}>
            {T('การละเว้นชิ้นส่วนที่ควรใช้ หรือการรวมและประกอบชิ้นส่วนในวิธีอื่นนอกจากการใช้งานที่ตั้งใจไว้ เป็นสิ่งต้องห้าม',
               'Omitting parts that should be used, or combining and assembling parts in ways other than their intended use, is prohibited.')}
          </Rule>
          <Rule n={3}>
            {T('การถอดแยกหรือดัดแปลงชิ้นส่วน Bey อย่างเป็นทางการ และการใช้ชิ้นส่วนดังกล่าว เป็นสิ่งต้องห้าม',
               'Disassembling or modifying official Bey parts, and the use of such parts, is prohibited.')}
            <SubBlock
              label={T('การเคลือบสีรูปแบบต่อไปนี้โดยทั่วไปเป็นสิ่งต้องห้าม:', 'The following forms of paint coatings are generally prohibited:')}
              items={T([
                'เปลี่ยนแปลงประสิทธิภาพ',
                'ทำให้ Bey/stadium ของคู่แข่งเสียหายหรือเลอะเปื้อน',
                'เคลือบบริเวณสัมผัสของแต่ละชิ้นส่วนหรือชิ้นส่วนที่สัมผัสกับ launcher',
                'การดัดแปลงที่ผู้ตัดสินพิจารณาว่าละเมิดหรืออาจละเมิดสิทธิ์ทรัพย์สินทางปัญญา เกียรติ ความน่าเชื่อถือ ภาพลักษณ์ ความเป็นส่วนตัว หรือสิทธิ์อื่น ๆ ของบุคคลที่สาม',
                'การดัดแปลงที่ผู้ตัดสินพิจารณาว่ามีเนื้อหาขัดต่อความสงบเรียบร้อยและศีลธรรมอันดี',
              ], [
                'Changes the performance',
                "Damage or distain the opponent's Bey/stadium",
                'Coating of the contact areas of each part or the parts that come into contact with the launcher',
                'Modifications that the judge determines infringe or could infringe the intellectual property rights, honor, credibility, image, privacy, or other rights of third parties',
                'Modifications that the judge determines contain content that is against public order and morals',
              ])}
            />
            <SubBlock
              label={T('การติดสติกเกอร์รูปแบบต่อไปนี้โดยทั่วไปเป็นสิ่งต้องห้าม:', 'The following types of sticker placement are generally prohibited:')}
              items={T([
                'ติดสติกเกอร์ที่ไม่ได้วางจำหน่ายหรือจัดจำหน่ายอย่างเป็นทางการ',
                'เปลี่ยนแปลงประสิทธิภาพ',
                'ทำให้ Bey/stadium ของคู่แข่งเสียหายหรือเลอะเปื้อน',
                'ติดสติกเกอร์บริเวณสัมผัสของแต่ละชิ้นส่วนหรือชิ้นส่วนที่สัมผัสกับ launcher',
                'ติดสติกเกอร์แบบตัดแต่ง เช่น สติกเกอร์ตัดรูป',
                'การซ้อนทับสติกเกอร์ (อย่างไรก็ตาม อนุญาตให้วางสติกเกอร์หนึ่งชิ้นทับบนรายการต่าง ๆ เช่น gear chip ของ Unique Line หรือบนสติกเกอร์ที่ติดอยู่แล้วกับผลิตภัณฑ์/รางวัลเมื่อเปิดครั้งแรก)',
              ], [
                'Applying stickers that are not officially sold or distributed',
                'Changes the performance',
                "Damage or distain the opponent's Bey/stadium",
                'Applying stickers to the contact areas of each part or the parts that come into contact with the launcher',
                'Applying processed stickers such as cut-out stickers',
                'Overlaying of stickers (However, it is permissible to place one sticker on top of items such as gear chip of the Unique Line, or on a sticker that is already attached to the product/prize at the time of opening.)',
              ])}
            />
            <div className="mt-2 bg-white bg-opacity-60 rounded-lg p-3 text-sm text-gray-700">
              {T('อนุญาตให้ทาสีบริเวณที่กำหนดของแต่ละชิ้นส่วน (Blade, Ratchet, Bit) ตราบใดที่ไม่ละเมิดข้อห้ามข้างต้น',
                 'Painting is allowed on the designated areas of each part (Blade, Ratchet, Bit) as long as it does not violate the prohibitions above.')}
            </div>
          </Rule>
          <RegImage src={`${S3}/Beyblade-X-Regulations-01.png`} alt={T("แผนภาพกฎการทาสีและสติกเกอร์", "Painting and sticker rules diagram")} />
          <Rule n={4}>
            {T('การใช้ชิ้นส่วนที่มีประสิทธิภาพดั้งเดิมถูกเปลี่ยนแปลงหรือปรับปรุงเป็นสิ่งต้องห้าม',
               'The use of parts where the original performance has been altered or enhanced is prohibited.')}
          </Rule>
          <Rule n={5}>
            {T('หลังจากนำเสนอ Bey ของคุณแล้ว คุณไม่สามารถเปลี่ยนได้ เว้นแต่ผู้ตัดสินจะแนะนำ หากอนุญาตให้เปลี่ยน Bey ได้ ทั้งสองฝ่ายอาจเปลี่ยน Bey ของตน',
               'After presenting your Bey, you cannot change it unless instructed by the judge. If Bey change is permitted, both parties may change their Bey.')}
          </Rule>
          <Rule n={6}>
            {T('หลังจากนำเสนอ Bey ของคุณ ผู้ตัดสินจะนำ "Blades", "Lock chips", "Main Blades", "Over Blades", "Metal Blades", "Assist Blades", "Ratchets" และ "Bits" ออกจาก Bey ของแต่ละคู่แข่ง ตรวจสอบแต่ละชิ้นส่วน และส่งคืน Bey ให้กับผู้ใช้โดยไม่ประกอบใหม่',
               'After presenting your Bey, the judge will remove the "Blades", "Lock chips", "Main Blades", "Over Blades", "Metal Blades", "Assist Blades", "Ratchets", and "Bits" from each competitor\'s Bey, check each part and return the Bey to the user without reassembling it.')}
          </Rule>
          <Rule n={7}>
            {T('คู่แข่งจะแสดงด้านหน้าและด้านหลังของ Bey ของตนให้กันและกันโดยไม่ส่งให้กันและกันเพื่อยืนยัน',
               'Competitors will show each other the front and back of their Beys without handing them over to each other for confirmation.')}
          </Rule>
          <Rule n={8}>
            {T('การสลับโหมดของชิ้นส่วนที่มีฟังก์ชัน Mode-Change หรือเปลี่ยนทิศทางของชิ้นส่วนเช่น ratchets สามารถทำได้ในแต่ละการต่อสู้หลังจากแสดง Bey ให้กันและกัน และหลังจากการร้องขอต่อผู้ตัดสิน',
               'Switching the mode of parts with the Mode-Change function or changing the orientation of parts such as ratchets, etc. can be done in each battle after showing the Beys to each other and after the request to the judge.')}
          </Rule>
          <Rule n={9}>
            {T('เมื่อ Bey แปลงร่างหลังจากปล่อย คุณต้องรีเซ็ตกลับสู่รูปแบบดั้งเดิมก่อนปล่อยอีกครั้ง โปรดทราบว่าการกระทำเหล่านี้ที่เกี่ยวข้องกับการแยก Bey ต้องเสร็จสิ้นภายในกรอบเวลาที่ผู้ตัดสินกำหนด',
               "When a Bey transforms after launching, you must reset it to its original form before launching again. Please note that these actions involving a Bey's separation must be completed within the time limit set by the judge.")}
          </Rule>
          <Rule n={10}>
            {T('คุณไม่สามารถแลกเปลี่ยน Beys หรือชิ้นส่วนระหว่างการต่อสู้ได้ อย่างไรก็ตาม เมื่อแมตช์สิ้นสุดและคู่แข่งเปลี่ยน คุณอาจแลกเปลี่ยน Beys และชิ้นส่วนได้',
               'You cannot exchange Beys or parts between battles. However, once a match is over and the opponent changes, you may exchange Beys and parts.')}
          </Rule>
          <Rule n={11}>
            {T('หากคุณมีคำถามใด ๆ เกี่ยวกับการตรวจสอบ Bey โปรดแจ้งผู้ตัดสินในสถานที่ ความคิดเห็นหลังจากแมตช์เริ่มต้นหรือจากผู้อื่นที่ไม่ใช่ผู้เล่นจะไม่ได้รับการยอมรับ',
               'If you have any questions regarding the Bey check, please inform the judge on the spot. Opinions after the match has started or from anyone other than the player will not be accepted.')}
          </Rule>
        </Section>

        {/* 3 */}
        <Section id="s3" titleTh="เกี่ยวกับการตรวจสอบ Launcher (รวมถึง grip เป็นต้น)" titleEn="Regarding Launcher Checks (including grip, etc.)" isEnglish={isEnglish} color="green">
          <Rule n={1}>
            {T('การละเว้นชิ้นส่วนที่ควรใช้ หรือการรวมชิ้นส่วนในวิธีอื่นนอกจากการใช้งานที่ตั้งใจไว้ เป็นสิ่งต้องห้าม',
               'Omitting parts that should be used, or combining parts in ways other than their intended use, is prohibited.')}
          </Rule>
          <Rule n={2}>
            {T('การใช้ชิ้นส่วนอย่างเป็นทางการที่ "ถอดแยก" หรือ "ดัดแปลง" เช่น launchers และ grips เป็นสิ่งต้องห้าม',
               'The use of "disassembled" or "modified" official parts such as launchers and grips is prohibited.')}
            <SubBlock
              label={T('การเคลือบชิ้นส่วนเช่น launchers และ grips โดยทั่วไปเป็นสิ่งต้องห้าม:', 'Coating of parts such as launchers and grips is generally prohibited:')}
              items={T([
                'เปลี่ยนแปลงประสิทธิภาพ',
                'ทำให้ Bey/stadium ของคู่แข่งเสียหายหรือเลอะเปื้อน',
                'เคลือบบริเวณสัมผัสของแต่ละชิ้นส่วนหรือชิ้นส่วนที่สัมผัสกับ launcher',
                'การดัดแปลงที่ผู้ตัดสินพิจารณาว่าละเมิดหรืออาจละเมิดสิทธิ์ทรัพย์สินทางปัญญา เกียรติ ความน่าเชื่อถือ ภาพลักษณ์ ความเป็นส่วนตัว หรือสิทธิ์อื่น ๆ ของบุคคลที่สาม',
                'การดัดแปลงที่ผู้ตัดสินพิจารณาว่ามีเนื้อหาขัดต่อความสงบเรียบร้อยและศีลธรรมอันดี',
              ], [
                'Changes the performance',
                "Damage or distain the opponent's Bey/stadium",
                'Coating of the contact areas of each part or the parts that come into contact with the launcher',
                'Modifications that the judge determines infringe or could infringe on the intellectual property rights, honor, credibility, image, privacy, or other rights of third parties',
                'Modifications that the judge determines contain content that is against public order and morals',
              ])}
            />
            <SubBlock
              label={T('การติดสติกเกอร์บนชิ้นส่วนเช่น launchers และ grips รูปแบบต่อไปนี้โดยทั่วไปเป็นสิ่งต้องห้าม:', 'The following types of sticker placement on parts such as launchers and grips are generally prohibited:')}
              items={T([
                'ติดสติกเกอร์ที่ไม่ได้วางจำหน่ายหรือจัดจำหน่ายอย่างเป็นทางการ',
                'เปลี่ยนแปลงประสิทธิภาพ',
                'ทำให้ Bey/stadium ของคู่แข่งเสียหายหรือเลอะเปื้อน',
                'ติดสติกเกอร์บริเวณสัมผัสของแต่ละชิ้นส่วนหรือชิ้นส่วนที่สัมผัสกับ launcher',
                'ซ้อนทับสติกเกอร์',
                'ติดสติกเกอร์แบบตัดแต่งเช่นสติกเกอร์ตัดรูป',
              ], [
                'Applying stickers that are not officially sold or distributed',
                'Changes the performance',
                "Damage or distain the opponent's Bey/stadium",
                'Applying stickers to the contact areas of each part or the parts that come into contact with the launcher',
                'Overlaying of stickers',
                'Applying processed stickers such as cut-out stickers',
              ])}
            />
            <SubBlock
              label={T('การใช้ Battle Pass Sheet ที่เข้าข่ายหมวดหมู่ต่อไปนี้โดยทั่วไปเป็นสิ่งต้องห้าม:', 'The use of Battle Pass Sheet that falls into the following categories is generally prohibited:')}
              items={T([
                'รายการที่ผู้ตัดสินพิจารณาว่าละเมิดหรืออาจละเมิดสิทธิ์ทรัพย์สินทางปัญญา เกียรติ ความน่าเชื่อถือ ความคล้ายคลึง ความเป็นส่วนตัว หรือสิทธิ์อื่น ๆ ของบุคคลที่สาม',
                'รายการที่ผู้ตัดสินพิจารณาว่ามีเนื้อหาขัดต่อความสงบเรียบร้อยและศีลธรรมอันดี',
              ], [
                'Items that the judge determines infringe or could infringe on the intellectual property rights, honor, credibility, likeness, privacy, or other rights of third parties',
                'Items that the judge determines contain content that is contrary to public order and morals',
              ])}
            />
          </Rule>
          <Rule n={3}>
            {T('การใช้ชิ้นส่วนที่มีประสิทธิภาพดั้งเดิมถูกเปลี่ยนแปลงหรือปรับปรุงเป็นสิ่งต้องห้าม',
               'The use of parts where the original performance has been altered or enhanced is prohibited.')}
          </Rule>
          <Rule n={4}>
            {T('หากผู้ตัดสินพิจารณาว่า launcher, grip หรือชิ้นส่วนอื่น ๆ ถูกดัดแปลงหรือชำรุด การใช้ชิ้นส่วนเหล่านั้นจะถูกห้าม',
               'If the judge determines that the launcher, grip, or any other parts have been modified or are defective, the use of those parts will be prohibited.')}
          </Rule>
          <Rule n={5}>
            {T('หาก launcher, grip หรือชิ้นส่วนอื่น ๆ ถูกเปลี่ยน ผู้ตัดสินจะทำการตรวจสอบ launcher',
               'If the launcher, grip, or any other parts have been replaced, the judge will conduct a launcher check.')}
          </Rule>
          <Rule n={6}>
            {T('หากการตกแต่ง launcher, grip หรือชิ้นส่วนอื่น ๆ ขัดขวางการต่อสู้ คุณอาจถูกขอให้นำออก',
               'If decorations on the launcher, grip, or any other parts interfere with the battle, you may be asked to remove them.')}
          </Rule>
        </Section>

        {/* 4 */}
        <Section id="s4" titleTh="เกี่ยวกับ Stadium" titleEn="Regarding the Stadium" isEnglish={isEnglish} color="amber">
          <Rule n={1}>{T('สามารถใช้เฉพาะ stadiums จาก "Beyblade X" series เท่านั้น', 'Only stadiums from the "Beyblade X" series can be used.')}</Rule>
          <Rule n={2}>{T('Stadium ประกอบด้วยตัวหลัก ฝาครอบ stadium และชิ้นส่วนอื่น ๆ', "A stadium consists of the main body, the stadium cover, and the stadium's other parts.")}</Rule>
          <Rule n={3}>{T('บริเวณ Shoot Area หมายถึงรูกลางฝาครอบ stadium', 'The shoot area refers to the hole in the center of the stadium cover.')}</Rule>
          <Rule n={4}>{T('Xtreme Line หมายถึงชิ้นส่วนรางที่ติดอยู่กับตัว stadium', 'The Xtreme Line refers to the rail parts fixed to the stadium body.')}</Rule>
          <RegImage src={`${S3}/Beyblade-X-Regulations-02.png`} alt={T("แผนภาพ Stadium", "Stadium diagram")} />
        </Section>

        {/* 5 */}
        <Section id="s5" titleTh="เกี่ยวกับ Xtreme Stadium" titleEn="Regarding the Xtreme Stadium" isEnglish={isEnglish} color="amber">
          <Rule n={1}>{T('Over Zone หมายถึงกระเป๋าสองใบที่ตั้งอยู่ที่ด้านหน้าซ้ายและขวาของ Xtreme Stadium', 'The Over Zone refers to the two pockets located at the front left and right of the Xtreme Stadium.')}</Rule>
          <Rule n={2}>{T('Xtreme Zone หมายถึงรูสองรูที่ตั้งอยู่ที่ด้านหลังซ้ายและขวาของ Xtreme Stadium', 'The Xtreme Zone refers to the two holes located at the back left and right of the Xtreme Stadium.')}</Rule>
          <Rule n={3}>{T('Battle Zone หมายถึงชิ้นส่วนของตัว Xtreme Stadium นอกเหนือจาก Over Zone และ Xtreme Zone', 'The Battle Zone refers to the parts of the Xtreme Stadium body other than the Over Zone and Xtreme Zone.')}</Rule>
          <RegImage src={`${S3}/Beyblade-X-Regulations-03.png`} alt={T("แผนภาพ Xtreme Stadium", "Xtreme Stadium diagram")} />
        </Section>

        {/* 6 */}
        <Section id="s6" titleTh="เกี่ยวกับ Wide Xtreme Stadium" titleEn="Regarding the Wide Xtreme Stadium" isEnglish={isEnglish} color="orange">
          <Rule n={1}>{T('Over Zone หมายถึงรูที่ตั้งอยู่ที่ด้านหน้ากลางของ Wide Xtreme Stadium', 'The Over Zone refers to the hole located at the center front of the Wide Xtreme Stadium.')}</Rule>
          <Rule n={2}>{T('Xtreme Zone หมายถึงรูสองรูที่ตั้งอยู่ที่ด้านหลังซ้ายและขวาของ Wide Xtreme Stadium', 'The Xtreme Zone refers to the two holes located at the back left and right of the Wide Xtreme Stadium.')}</Rule>
          <Rule n={3}>{T('Battle Zone หมายถึงชิ้นส่วนของตัว Wide Xtreme Stadium นอกเหนือจาก Over Zone และ Xtreme Zone', 'The Battle Zone refers to the parts of the Wide Xtreme Stadium body other than the Over Zone and Xtreme Zone.')}</Rule>
          <RegImage src={`${S3}/Beyblade-X-Regulations-04.png`} alt={T("แผนภาพ Wide Xtreme Stadium", "Wide Xtreme Stadium diagram")} />
        </Section>

        {/* 7 */}
        <Section id="s7" titleTh="เกี่ยวกับ Infinity Stadium" titleEn="Regarding the Infinity Stadium" isEnglish={isEnglish} color="teal">
          <Rule n={1}>{T('Over Zone หมายถึงกระเป๋าที่ตั้งอยู่ที่สี่ตำแหน่งซ้ายและขวาด้านหน้าและด้านหลังของ Infinity Stadium', 'The Over Zone refers to the pockets located at the four left and right positions in front and back of the Infinity Stadium.')}</Rule>
          <Rule n={2}>{T('Xtreme Zone หมายถึงรู 2 รูที่ตั้งอยู่ที่ตำแหน่งกลางด้านหน้าและด้านหลังของ Infinity Stadium', 'The Xtreme Zone refers to the 2 holes located at the central positions in front of and back of the Infinity Stadium.')}</Rule>
          <Rule n={3}>{T('Battle Zone หมายถึงชิ้นส่วนของตัวหลัก Infinity Stadium ไม่รวม Over Zone และ Xtreme Zone', 'The Battle Zone refers to the parts of the Infinity Stadium main body excluding the Over Zone and Xtreme Zone.')}</Rule>
          <RegImage src={`${S3}/Beyblade-X-Regulations-05.png`} alt={T("แผนภาพ Infinity Stadium", "Infinity Stadium diagram")} />
        </Section>

        {/* 8 */}
        <Section id="s8" titleTh="วิธีการยิง (Shooting Method)" titleEn="Shooting Method" isEnglish={isEnglish} color="purple">
          <Rule n={1}>{T('เมื่อปล่อย Bey ของคุณ ให้ยิงจากความสูงไม่เกิน 20 ซม. เหนือตัว stadium', 'When launching your Bey, shoot from a height of 20 cm or less above the stadium body.')}</Rule>
          <Rule n={2}>{T('กำหนดตำแหน่งการยิง (ตำแหน่งซ้าย ตำแหน่งขวา ตำแหน่งกลาง) โดยวิธีที่ยุติธรรม เช่น เป่ายิ้งฉุบ ตำแหน่งที่เลือกไม่สามารถเปลี่ยนได้ระหว่างแมตช์นั้น', 'Decide the Shooting position (left position, right position, center position) by a fair means such as rock-paper-scissors. The chosen shoot position cannot be changed during that match.')}</Rule>
          <Rule n={3}>{T('โดยทั่วไป ผู้เล่นต้องเตรียมยิงเฉพาะเมื่อส่วนหนึ่งของ Beyblade อยู่ภายในตำแหน่งการยิงที่เลือกไว้เท่านั้น อย่างไรก็ตาม กฎนี้ไม่ใช้บังคับหากผู้ตัดสินพิจารณาว่าท่ายืนของผู้เล่นทั้งสองไม่รบกวนการปล่อยหรือการเตรียมของฝ่ายตรงข้าม', "Generally, players must prepare to shoot only when part of their Beyblade is within their chosen shoot position. However, this rule does not apply if the judge determines that neither player's shooting stance interferes with the opponent's launch or preparation.")}</Rule>
          <Rule n={4}>{T('ห้ามรบกวนการปล่อยหรือท่าทางของฝ่ายตรงข้ามด้วยท่ายืนยิงของคุณ ในทุกกรณี ห้ามส่วนร่างกาย/launcher/อุปกรณ์เสริมของผู้เล่นสัมผัสกับฝ่ายตรงข้ามหรือ stadium ระหว่างการปล่อย หากมือ แขน ตัว launcher หรืออุปกรณ์เสริมของฝ่ายตรงข้ามเข้ามาในตำแหน่งการยิงของคุณและรบกวนการยิงหรือท่าทางของคุณ คุณสามารถแจ้งผู้ตัดสินได้ หากผู้ตัดสินยืนยันว่ามีการรบกวน ผู้เล่นจะถูกขอให้ปรับท่ายืนปล่อยใหม่ และการต่อสู้จะเริ่มต้น หากเกิดการสัมผัสระหว่างการยิงและผู้ตัดสินเห็นว่าเป็นอันตราย ผู้ตัดสินอาจกำหนดท่ายืนยิง การสัมผัสโดยเจตนากับฝ่ายตรงข้ามหรือ stadium ตามที่ผู้ตัดสินพิจารณา จะส่งผลให้ถูกตัดสิทธิ์', "It is prohibited to interfere with an opponent's launch or stance through your shooting posture. Under no circumstances may a player's body part / launcher / accessories be in contact with the opponent or the stadium during the launch. If an opponent's hand, arm, launcher body, or accessories enter your shooting position and interfere with your shot or stance, you may report this to the judge. If the judge confirms there was interference, players will be required to adjust their launch stance, and the battle will begin. If contact occurs during a shot and the judge deems it dangerous, the judge may specify the shooting stance. Intentional contact with the opponent or stadium, as determined by the judge, will result in disqualification.")}</Rule>
          <Rule n={5}>{T('ยิงพร้อมกับการนับ "สาม สอง หนึ่ง Go Shoot"', 'Shoot with the call "Three, Two, One, Go Shoot".')}</Rule>
          <Rule n={6}>{T('ยิง Bey ของคุณให้ผ่านบริเวณ shoot area', 'Shoot your Bey so that it passes through the shoot area.')}</Rule>
          <Rule n={7}>{T('เมื่อผู้ตัดสินนับ "สาม สอง หนึ่ง Go Shoot" ให้ปล่อย Bey ในระหว่างการเรียก "Shoot"', 'When the judge calls "Three, Two, One, Go Shoot", launch your Bey during the call of "Shoot".')}</Rule>
          <Rule n={8}>{T('ห้ามยิง Bey ขณะที่ยังวางอยู่บน stadium หากผู้ตัดสินพิจารณาว่าการสัมผัสเป็นเจตนา จะส่งผลให้ถูกตัดสิทธิ์', 'Do not shoot your Bey while keeping it grounded in the stadium. If the judge determines that contact touch was intentional, it will result in disqualification.')}</Rule>
          <Rule n={9}>
            {T('เตรียมท่ายืนยิงภายในพื้นที่ลายทแยงที่กำหนดไว้ สำหรับ Wide Xtreme Stadium ให้วางตัวตรงหน้าเครื่องหมายตำแหน่งการยิงโดยตรง', 'Prepare your shooting stance within the designated hatched area. For the Wide Xtreme Stadium, position your body directly in front of the shooting position marker.')}
            <div className="mt-2 bg-white bg-opacity-60 rounded-lg p-3 text-sm">
              <p className="font-semibold text-gray-700 mb-1">{T('ตำแหน่งการยิงตาม stadium:', 'Shooting positions by stadium:')}</p>
              <ul className="space-y-0.5 text-gray-700">
                <li><strong>Xtreme Stadium:</strong> {T('ตำแหน่งซ้าย / ตำแหน่งขวา', 'Left position / Right position')}</li>
                <li><strong>Wide Xtreme Stadium:</strong> {T('ตำแหน่งกลาง / ตำแหน่งซ้าย / ตำแหน่งขวา', 'Center position / Left position / Right position')}</li>
                <li><strong>Infinity Stadium:</strong> {T('ตำแหน่งซ้าย / ตำแหน่งขวา', 'Left position / Right position')}</li>
              </ul>
            </div>
          </Rule>
          <RegImage src={`${S3}/Beyblade-X-Regulations-06.png`} alt={T("แผนภาพท่าทางการยิง", "Shooting stance diagram")} />
          <RegImage src={`${S3}/Beyblade-X-Regulations-07.png`} alt={T("แผนภาพตำแหน่งการยิง", "Shooting position diagram")} />
        </Section>

        {/* 9 */}
        <Section id="s9" titleTh="เกี่ยวกับการต่อสู้ (Regarding Battle)" titleEn="Regarding Battle" isEnglish={isEnglish} color="blue">
          <Rule n={1}>{T('หลังจากยิงแล้ว ให้ถอยหลังหนึ่งก้าว', 'After shooting, step back one step.')}</Rule>
          <Rule n={2}>{T('ห้ามมองเข้าไปใน stadium', 'Do not peer into the stadium.')}</Rule>
          <Rule n={3}>{T('หาก Bey ไม่หลุดจาก launcher ระหว่างการยิง หรือ Bey ตกลงหลังจากผู้ตัดสินนับ "สาม สอง หนึ่ง Go Shoot" หรือ Bey ถูกยิงออกนอกบริเวณ shoot area ที่กำหนด และสัมผัสด้านนอกของ stadium หรือฝาครอบ stadium จะถือว่าเป็น shooting error', 'If the Bey does not detach from the launcher during the shoot, or if the Bey falls off after the judge has called "Three, two, one, go shoot", or if the Bey is shot outside the designated shoot area and touches the exterior of stadium or the stadium cover, it will be considered a shooting error.')}</Rule>
          <Rule n={4}>{T('การยิงก่อนที่ผู้ตัดสินจะเรียก "Shoot" ถือว่าเป็น premature launch (การเริ่มเท็จ) ส่วนการยิงหลังจากการนับเสร็จสิ้นแล้วถือว่าเป็น delayed launch', 'A shoot before the judge calls "shoot" is considered a premature launch (false start), while a shoot after the call has been completed is considered a delayed launch.')}</Rule>
          <Rule n={5}>{T('ผู้ตัดสินจะพิจารณา shooting errors, premature launches และ delayed launches และจะเตือนผู้เล่นที่เกี่ยวข้อง', 'The judge will determine shooting errors, premature launches, and delayed launches, and will caution the respective players.')}</Rule>
          <Rule n={6}>{T('การต่อสู้เริ่มต้นเมื่อ Beys ทั้งหมดผ่าน shoot area และสัมผัส stadium แล้ว หาก Beys ชนกันในอากาศก่อนสัมผัส stadium หรือมีกรณีที่ชิ้นส่วนหลุดออก และการต่อสู้ยังไม่เริ่ม การต่อสู้จะถูกเริ่มใหม่', 'The battle begins once all Beys have passed through the shoot area and touched the stadium. If the Beys collide in the air before they touch the stadium, or if there are cases where parts come off, and the battle has not started, then the battle will be restarted.')}</Rule>
          <Rule n={7}>{T('หากคุณมีคำถามใด ๆ เกี่ยวกับการต่อสู้ โปรดแจ้งผู้ตัดสินในสถานที่ ความคิดเห็นหลังจากการต่อสู้ถัดไปเริ่มต้น หรือจากผู้อื่นที่ไม่ใช่ผู้เล่นจะไม่ได้รับการยอมรับ', 'If you have any questions regarding the battle, please inform the judge on the spot. Opinions after the next battle has started or from anyone other than the player will not be accepted.')}</Rule>
          <Rule n={8}>{T('ห้ามสัมผัส stadium หรือ Beys ภายใน stadium จนกว่าผู้ตัดสินจะอนุญาต', 'Do not touch the stadium or the Beys inside the stadium until the judge grants permission.')}</Rule>
          <Rule n={9}>{T('หากผู้ตัดสินพิจารณาว่าวิธีที่ผู้เล่นใช้หรือปล่อย Bey เป็นอันตราย หรือมีเหตุการณ์ใดที่ขัดขวางการเล่นที่ยุติธรรม ผู้ตัดสินจะหยุดและเริ่มการต่อสู้ใหม่', 'If the judge determines that the way a player uses or launches the Bey is dangerous, or any event that disrupts fair play occurs, the judge will stop and restart the battle.')}</Rule>
        </Section>

        {/* 10 */}
        <Section id="s10" titleTh="เกี่ยวกับผลการต่อสู้ (Regarding Battle Results)" titleEn="Regarding Battle Results" isEnglish={isEnglish} color="red">
          <Rule n={1}>{T('Bey ที่หมุนต่อเนื่องใน battle zone นานกว่า Bey ของฝ่ายตรงข้ามเป็นผู้ชนะ', "The Bey that continues to spin in the battle zone longer than the opponent's Bey wins.")}</Rule>
          <Rule n={2}>{T('การตัดสินใจเกี่ยวกับผลลัพธ์และท่าจบการต่อสู้ต้องปฏิบัติตามคำตัดสินของผู้ตัดสิน', "Decisions regarding outcomes and finishing moves must follow the judge's rulings.")}</Rule>

          <div className="my-4 text-sm text-gray-700 bg-white bg-opacity-60 rounded-lg p-3">
            {T('หากการต่อสู้เริ่มต้นโดยไม่มี shooting errors, premature launches หรือ delayed launches คะแนนจะได้รับตามท่าจบการต่อสู้ต่อไปนี้ ผู้ที่ได้ 4 คะแนนก่อนชนะแมตช์',
               'If the battle starts without any shooting errors, premature launches, or delayed launches, points are awarded based on the following finishing moves. The first to earn 4 points wins the match.')}
          </div>

          {/* Score table */}
          <div className="overflow-x-auto rounded-xl border border-red-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-red-700 text-white">
                  <th className="px-4 py-2 text-left">{T('ท่าจบ', 'Finish')}</th>
                  <th className="px-4 py-2 text-center">{T('คะแนน', 'Points')}</th>
                  <th className="px-4 py-2 text-left">{T('เงื่อนไข', 'Condition')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { emoji: '⚡', name: 'Xtreme Finish', pts: 3,
                    th: 'เกิดขึ้นเมื่อ Bey ของฝ่ายตรงข้ามเข้าไปใน Xtreme zone อย่างสมบูรณ์และไม่สามารถกลับมาใน battle zone ได้',
                    en: "This occurs when the opponent's Bey completely enters the Xtreme zone and cannot return to the battle zone.",
                    note: T('ขึ้นอยู่กับดุลยพินิจของผู้ตัดสิน', "Subject to judge's discretion"), bg: 'bg-white' },
                  { emoji: '🚀', name: 'Over Finish', pts: 2,
                    th: 'เกิดขึ้นเมื่อ Bey ของฝ่ายตรงข้ามเข้าไปใน over zone อย่างสมบูรณ์และไม่สามารถกลับมาใน battle zone ได้',
                    en: "This occurs when the opponent's Bey completely enters the over zone and cannot return to the battle zone.",
                    note: T('ขึ้นอยู่กับดุลยพินิจของผู้ตัดสิน', "Subject to judge's discretion"), bg: 'bg-red-50' },
                  { emoji: '💥', name: 'Burst Finish', pts: 2,
                    th: 'เกิดขึ้นเมื่อชิ้นส่วนของ Bey ฝ่ายตรงข้ามหลุดและแยกออกก่อน Bey ของคุณ (เช่น Blade, Lock Chip, Main Blade, Over Blade, Metal Blade, Assist Blade, Ratchet หรือ Bit)',
                    en: "This occurs when the parts of the opponent's Bey detach and separate before your Bey (such as the Blade, Lock Chip, Main Blade, Over Blade, Metal Blade, Assist Blade, Ratchet, or Bit).",
                    note: null, bg: 'bg-white' },
                  { emoji: '🌀', name: 'Spin Finish', pts: 1,
                    th: 'เกิดขึ้นเมื่อความเร็วการหมุนของ Bey ฝ่ายตรงข้ามในทิศทางการหมุนดั้งเดิมกลายเป็นศูนย์ใน battle zone ก่อน Bey ของคุณ',
                    en: "This occurs when the spinning speed of the opponent's Bey in its original rotation direction becomes zero in the battle zone before your Bey.",
                    note: null, bg: 'bg-red-50' },
                ].map(row => (
                  <tr key={row.name} className={`${row.bg} border-t border-red-100`}>
                    <td className="px-4 py-3 font-bold">{row.emoji} {row.name}</td>
                    <td className="px-4 py-3 text-center font-bold text-lg">{row.pts}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      <p>{isEnglish ? row.en : row.th}</p>
                      {row.note && <p className="mt-1 text-xs text-gray-500">{row.note}</p>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 italic mb-4">
            {T('* BULLET ที่หลุดจาก GRIFFON ไม่นับรวมในการตัดสินแพ้ชนะที่กล่าวถึงข้างต้น ผลลัพธ์ถูกกำหนดตามตัวหลักของ Bey',
               '* BULLET detached from the GRIFFON do not count toward the win/loss judgment mentioned above. The outcome is determined based on the main body itself.')}
          </p>
          <Rule n={3}>{T('หากผู้ตัดสินพิจารณาว่า Xtreme Finish, Over Finish, Burst Finish, Spin Finish หรือการรวมกันใด ๆ เกิดขึ้นพร้อมกัน ถือว่าเป็นการเสมอ และการต่อสู้จะถูกเริ่มใหม่', 'If the judge determines that Xtreme Finish, Over Finish, Burst Finish, Spin Finish, or any combination of these occur simultaneously, it is considered a draw, and the battle will be restarted.')}</Rule>
          <Rule n={4}>
            {T('หากมีท่าจบการต่อสู้หลายท่าในการต่อสู้เดียวกัน ผลลัพธ์จะถูกกำหนดโดยท่าที่เกิดขึ้นก่อน ตามช่วงเวลาต่อไปนี้:', 'If multiple finishing moves occur in the same battle, the outcome will be determined by the finishing move that occurs first, based on the following timing:')}
            <SubBlock label="" items={T([
              'Xtreme Finish: ช่วงเวลาที่ Bey ทั้งหมดเข้าสู่ Xtreme zone',
              'Over Finish: ช่วงเวลาที่ Bey ทั้งหมดเข้าสู่ over zone',
              'Burst Finish: ช่วงเวลาที่ชิ้นส่วนของ Bey หลุดและแยกออก',
              'Spin Finish: ช่วงเวลาที่ความเร็วการหมุนของ Bey ในทิศทางการหมุนดั้งเดิมกลายเป็นศูนย์',
            ], [
              'Xtreme Finish: The moment the entire Bey enters the Xtreme zone.',
              'Over Finish: The moment the entire Bey enters the over zone.',
              "Burst Finish: The moment a Bey's parts detach and separate.",
              "Spin Finish: The moment the Bey's spinning speed in its original rotation direction becomes zero.",
            ])} />
          </Rule>
          <Rule n={5}>{T('ถือว่าเป็น Reverse หาก Bey ทั้งหมด หลังจากเข้าสู่ Xtreme zone หรือ over zone หรือหลังจากออกจาก stadium ครั้งหนึ่ง กลับเข้ามาใน battle zone ขณะยังคงการหมุน ในกรณีนี้ Xtreme finish, over finish หรือการเริ่มใหม่จะถูกยกเลิก และการต่อสู้ดำเนินต่อ', 'It is considered as a Reverse if the entire Bey, after entering the Xtreme zone or over zone or after leaving the stadium once, returns to the battle zone while maintaining its rotation. In this case, the Xtreme finish, over finish, or restart is canceled, and the battle continues.')}</Rule>
          <Rule n={6}>{T('ห้ามสัมผัส Beys ใด ๆ ภายใน stadium ก่อนผู้ตัดสินประกาศผล หากทำเช่นนั้น ผู้ตัดสินอาจตัดสินว่าคุณแพ้การต่อสู้', 'Do not touch any Beys inside the stadium before the judge announces the outcome. If you do, the judge may determine that you lose the match.')}</Rule>
          <Rule n={7}>{T('การรบกวนการต่อสู้โดยเจตนาร้ายจะส่งผลให้ถูกตัดสิทธิ์ ตามที่ผู้ตัดสินพิจารณา', 'Malicious battle interference will result in disqualification, as determined by the judge.')}</Rule>
          <Rule n={8}>{T('ในทุกกรณี ห้ามผู้เล่นสัมผัส stadium ด้วยร่างกาย launcher การตกแต่ง เป็นต้น ระหว่างการต่อสู้ หากผู้ตัดสินพิจารณาว่าการสัมผัสเป็นเจตนา จะส่งผลให้ถูกตัดสิทธิ์ อย่างไรก็ตาม ข้อนี้ไม่ใช้บังคับในกรณีที่ที่จับหรือเชือกของ string launcher สัมผัส stadium หลังการยิง โดยผู้ตัดสินพิจารณาว่าไม่ส่งผลต่อการต่อสู้', 'Under no circumstances are players allowed to touch the stadium with their body, launcher, decorations, etc., during the battle. If the judge determines that a touch was intentional, it will result in disqualification. However, this does not apply in cases where the handle of the string launcher or string touches the stadium after the shoot, provided the judge determines it does not affect the battle.')}</Rule>
          <Rule n={9}>
            {T('ในกรณีถูกตัดสิทธิ์ ผลแมตช์ในอดีตจะไม่ถูกเพิกถอนไม่ว่าในกรณีใด การตัดสิทธิ์มีผลตั้งแต่ช่วงเวลาที่มีการตัดสิน', 'In the event of disqualification, past match results will not be overturned for any reason. Disqualification takes effect from the moment a ruling has been determined.')}
            <SubBlock label="" items={T([
              'ในกรณีที่ไม่สามารถกำหนดท่าจบการต่อสู้ได้ เช่น Bey ออกจาก stadium จากตำแหน่งอื่นนอกจาก Over Zone หรือ Xtreme Zone และไม่สามารถกลับมาใน battle zone ได้ การต่อสู้อาจถูกเล่นซ้ำตามดุลยพินิจของผู้ตัดสิน',
              'หากกฎระเบียบแตกต่างกันตามแต่ละทัวร์นาเมนต์ ข้อมูลที่ให้ไว้สำหรับทัวร์นาเมนต์นั้น ๆ อาจมีผลเหนือกว่า',
              'ในการต่อสู้เดียวกัน หากมี shooting errors, premature launches หรือ delayed launches รวมสองครั้ง จะมอบคะแนนหนึ่งให้ฝ่ายตรงข้าม และการต่อสู้จะถูกเล่นซ้ำ เมื่อได้คะแนนแล้ว shooting errors ก่อนหน้าจะถูกยกเลิก อย่างไรก็ตาม หากผู้เล่นทุกคนในการต่อสู้เดียวกันทำการกระทำนั้นพร้อมกันเป็นครั้งที่สอง ครั้งที่สองจะถูกทำให้เป็นโมฆะ และการต่อสู้จะถูกเล่นซ้ำโดยถือว่าผู้เล่นทุกคนทำการกระทำนั้นเป็นครั้งแรก',
            ], [
              'In cases where it is impossible to determine any finishing move, such as when a Bey exits the stadium from a location other than the Over Zone or Xtreme Zone and cannot return to the battle zone, the battle may be replayed at the discretion of the judge.',
              'If the rules vary depending on the tournament, the information provided for that specific tournament may take precedence.',
              'In the same battle, if there are a total of two shooting errors, premature launches, or delayed launches, one point is awarded to the opponent, and the battle will be replayed. Once a point is scored, any previous shooting errors will be nullified. However, if all players in the same battle simultaneously perform the action for the second time, the second occurrence will be invalidated, and the battle will be replayed with all players considered to have performed the action for the first time.',
            ])} />
          </Rule>
        </Section>

        {/* 11 */}
        <Section id="s11" titleTh="เกี่ยวกับผลการแข่งขันแบบ 3 ต่อ 3" titleEn="Regarding Results of 3on3 Battles" isEnglish={isEnglish} color="sky">
          <p className="font-semibold text-sky-800 mb-3 text-sm">{T('— การเตรียมตัว —', '— Preparation —')}</p>
          <Rule n={1}>{T('วาง Beys สามตัวใน deck case ตามลำดับที่จะต่อสู้ และผ่านการตรวจสอบ Bey', 'Place the three Beys in the deck case in the order they will battle, and undergo Bey check.')}</Rule>
          <Rule n={2}>{T('ผู้เล่นไม่สามารถใช้ชิ้นส่วนเดียวกันซ้ำหลายครั้งใน Beys สามตัว แม้สีจะต่างกันก็ถือว่าเป็นชิ้นส่วนเดียวกัน อย่างไรก็ตาม สำหรับ lock chips ใน Custom Line (CX) "Valkyrie" และ "Emperor" จำกัดอย่างละหนึ่งชิ้นเท่านั้น lock chips อื่น ๆ สามารถใช้ซ้ำได้', 'A player cannot use the same part multiple times among the three Beys. Even if the colors differ, they are considered as the same part. However, among the lock chips in the Custom Line (CX), "Valkyrie" and "Emperor" are each limited to only one each; all other lock chips can be used in multiples.')}</Rule>
          <Rule n={3}>{T('ระหว่างแมตช์ ห้ามเปลี่ยนลำดับหรือการรวมกันของ Beys สามตัว โดยไม่ได้รับอนุญาตจากผู้ตัดสิน', "During the match, you cannot change the order or combination of the three Beys without the judge's permission.")}</Rule>
          <Rule n={4}>{T('หากคุณไม่สามารถเตรียม Beys สามตัวได้ คุณจะได้รับ Bey เช่าหนึ่งตัวจากผู้ตัดสิน คุณต้องใช้ Bey เช่านั้นทุกการต่อสู้', 'If you cannot prepare three Beys, you will receive one rental Bey from the judge. You must use the rental Bey for every battle.')}</Rule>
          <p className="font-semibold text-sky-800 mb-3 mt-5 text-sm">{T('— ผลลัพธ์ —', '— Outcome —')}</p>
          <Rule n={1}>{T('Blader ที่สะสมคะแนนรวม 4 คะแนนได้ก่อนเป็นผู้ชนะ', 'The Blader who first accumulates a total of 4 points wins.')}</Rule>
          <Rule n={2}>{T("การต่อสู้จะดำเนินการทีละหนึ่ง Bey ตามลำดับที่ผู้ใช้กำหนด", "Battles are conducted one Bey at a time, following the user's assigned order.")}</Rule>
          <Rule n={3}>{T('ในกรณีที่เสมอกัน จะมีการแข่งซ้ำด้วย Beys เดิม', 'In the case of a draw, a rematch will be held with the same Beys.')}</Rule>
          <Rule n={4}>{T('หากไม่มีผู้ชนะหลังจากสามการต่อสู้ คุณอาจจัดเรียงลำดับ Beys ใหม่ได้ หลังจากนั้นดำเนินการต่อ และแมตช์ยังคงดำเนินต่อ', 'If a winner is not determined after three battles, you may rearrange your order of Beys. Afterwards, continue with the match, and the match continues.')}</Rule>
        </Section>

        {/* 12 */}
        <Section id="s12" titleTh="เกี่ยวกับผลการแข่งขันแบบ 3 Blader" titleEn="Regarding Outcomes of 3-Blader Battles" isEnglish={isEnglish} color="pink">
          <p className="font-semibold text-pink-800 mb-3 text-sm">{T('— ผลการต่อสู้ —', '— Battle outcomes —')}</p>
          <Rule n={1}>{T('ผู้เล่นสามคนต่อสู้กัน และผู้ที่เหลืออยู่คนสุดท้ายเป็นผู้ชนะ', 'Three players battle, and the last person remaining is the winner.')}</Rule>
          <Rule n={2}>{T('จนกว่าจะมีการตัดสินว่าใครเป็นผู้ที่เหลืออยู่คนสุดท้าย ห้ามสัมผัส Beys ภายใน stadium หากทำเช่นนั้น ผู้ตัดสินอาจตัดสินว่าคุณแพ้การต่อสู้ ในกรณีนั้น การต่อสู้ดำเนินต่อกับผู้เล่นที่เหลือโดยไม่เปลี่ยนตำแหน่งการยิงหรือคะแนนที่ได้รับ', 'Until the last person remaining is determined, do not touch the Beys inside the stadium. If you do, the judge may determine that you lose the match. In that case, the match continues with the remaining players without changing the Shooting position or points earned.')}</Rule>
          <Rule n={3}>{T('หากมีท่าจบหลายท่าในการต่อสู้เดียวกันสำหรับ Bey เดียว เช่น Bey ที่บรรลุ spin finish แล้วแตกหลังจากสัมผัส Bey อีกตัว ผลลัพธ์จะถูกกำหนดโดยท่าจบที่เกิดขึ้นก่อน', 'If multiple finishing moves occur in the same battle for a single Bey, such as when a Bey that has already achieved a spin finish bursts after touching another Bey, the outcome will be determined by the finishing move that occurred first.')}</Rule>
          <Rule n={4}>
            {T('หากผู้เล่นสะสม shooting errors, premature launches หรือ delayed launches สองครั้งในการต่อสู้เดียวกัน ตำแหน่งการยิงจะไม่เปลี่ยน และการต่อสู้จะถูกเริ่มใหม่กับผู้เล่นอีกสองคน โดยไม่รวมผู้เล่นที่ถูกคัดออก หลังจากการต่อสู้ หากแมตช์ยังไม่สิ้นสุด การต่อสู้จะดำเนินต่อกับผู้เล่นทั้งสามคน', 'If a player accumulates two shooting errors, premature launches, or delayed launches in the same battle, the shooting position will not be changed and the battle will be restarted with two other players, excluding the player who got eliminated. After the battle, if the match has not been settled, the battle will continue with all three players.')}
            <SubBlock label="" items={T([
              'หากผู้เล่นหนึ่งคนถูกคัดออกเนื่องจาก shooting errors และผู้เล่นอีกคนยังสะสมสองครั้งด้วย ผู้เล่นที่เหลือจะได้รับ 1 คะแนน และการต่อสู้ถัดไปจะเริ่ม',
              'หากผู้เล่นสองคนกำลังเล่นกับ Wide Xtreme Stadium เมื่อเริ่มการต่อสู้ ผู้เล่นจะได้รับ 1 คะแนนเมื่อฝ่ายตรงข้ามสะสม shooting errors สองครั้งในการต่อสู้เดียวกัน และการต่อสู้จะถูกเริ่มใหม่',
            ], [
              'If one player is eliminated due to shooting errors, premature launches, or delayed launches, and the other player also accumulates two, the remaining player will receive 1 point and the next battle will begin.',
              'If two players are playing with the Wide Xtreme Stadium at the start of a battle, the player will receive 1 point when the opponent accumulates two shooting errors, premature launches, or delayed launches in the same battle, and the battle will be restarted.',
            ])} />
          </Rule>
          <Rule n={5}>
            {T('ในการต่อสู้เดียวกัน หากผู้เล่นสองคนสะสม shooting errors, premature launches หรือ delayed launches สองครั้งพร้อมกัน ผู้เล่นที่เหลือจะได้รับ 1 คะแนน และการต่อสู้จะถูกเริ่มใหม่', 'In the same battle, if two players simultaneously accumulate two shooting errors, premature launches, or delayed launches, the remaining player receives 1 point, and the battle is restarted.')}
            <SubBlock label="" items={T([
              'เมื่อได้คะแนนแล้ว shooting errors ก่อนหน้าจะถูกยกเลิก',
              'อย่างไรก็ตาม หากผู้เล่นทุกคนในการต่อสู้เดียวกันทำการกระทำนั้นพร้อมกันเป็นครั้งที่สอง ครั้งที่สองจะถูกทำให้เป็นโมฆะ และการต่อสู้จะถูกเล่นซ้ำโดยถือว่าผู้เล่นทุกคนทำการกระทำนั้นเป็นครั้งแรก',
            ], [
              'Once a point is scored, any previous shooting errors, premature launches, or delayed launches will be nullified.',
              'However, if all players in the same battle simultaneously perform the action for the second time, the second occurrence will be invalidated, and the battle will be replayed with all players considered to have performed the action for the first time.',
            ])} />
          </Rule>
          <p className="font-semibold text-pink-800 mb-3 mt-5 text-sm">{T('— เกี่ยวกับผลแมตช์ —', '— Regarding Match Outcomes —')}</p>
          <div className="space-y-3">
            <div className="bg-white bg-opacity-60 rounded-lg p-4 text-sm">
              <p className="font-bold text-pink-700 mb-1">{T('ระบบ 5 คะแนน (5-point System):', '5-point System:')}</p>
              <p className="text-gray-700">{T('เริ่มการต่อสู้แบบ 3 ผู้เล่น คะแนนทั้งหมดจากท่าจบของผู้เล่นอีกสองคนจะมอบให้กับผู้เล่นที่เหลืออยู่คนสุดท้าย ผู้ที่สะสม 5 คะแนนก่อนชนะแมตช์', 'Start a 3-player battle. All points from the finishing moves of the other two players are awarded to the last person remaining. The player who first accumulates a total of 5 points wins the match.')}</p>
            </div>
            <div className="bg-white bg-opacity-60 rounded-lg p-4 text-sm">
              <p className="font-bold text-pink-700 mb-1">{T('ระบบชนะสองครั้ง (Best of Two Wins System):', 'Best of Two Wins System:')}</p>
              <p className="text-gray-700">{T('เริ่มการต่อสู้แบบ 3 ผู้เล่น ผู้เล่นที่เหลืออยู่คนสุดท้าย ไม่ว่าจะด้วยท่าจบใด ได้รับหนึ่งชัยชนะ ผู้ที่บรรลุสองชัยชนะก่อนเป็นผู้ชนะโดยรวม หากผู้เล่นได้คะแนนเนื่องจาก shooting error ของฝ่ายตรงข้าม ก็นับเป็นหนึ่งชัยชนะด้วย', "Start a 3-player battle. The last person remaining, regardless of the finishing move, earns one win. The first player to achieve two wins is the overall winner. If a player earns points due to the opponent's shooting error, premature launch, or delayed launch, it also counts as one win.")}</p>
            </div>
          </div>
        </Section>

        {/* 13 */}
        <Section id="s13" titleTh="เกี่ยวกับผลการแข่งขันแบบทีม" titleEn="About Team Battle Outcomes" isEnglish={isEnglish} color="indigo">
          <p className="font-semibold text-indigo-800 mb-3 text-sm">{T('— เกี่ยวกับการเตรียมตัว —', '— About Preparation —')}</p>
          <Rule n={1}>{T('จัดตั้งทีมตามจำนวนสมาชิกที่กฎของทัวร์นาเมนต์กำหนด ทีมที่มีจำนวนสมาชิกต่างออกไปไม่สามารถเข้าร่วมได้', 'Form a team with the number of members specified by the tournament rules. Teams with a different number of members cannot participate.')}</Rule>
          <Rule n={2}>{T('วาง Beyblades ใน deck case ของแต่ละ blader ตามลำดับที่จะต่อสู้ และผ่านการตรวจสอบ Bey', 'Place the Beyblades in each blader\'s deck case in the order they will battle and undergo Bey check.')}</Rule>
          <Rule n={3}>{T('ชิ้นส่วนเดียวกันไม่สามารถใช้ร่วมกันใน Beyblades ของทีม ชิ้นส่วนที่มีสีต่างกันของชิ้นส่วนเดียวกันก็ถือว่าเป็นชิ้นส่วนเดียวกัน อย่างไรก็ตาม สำหรับ lock chips ใน Custom Line (CX) "Valkyrie" และ "Emperor" จำกัดอย่างละหนึ่งชิ้นเท่านั้น lock chips อื่น ๆ สามารถใช้ซ้ำได้', 'The same part cannot be used across the Beyblades in a team. Different color variations of the same part are also considered as the same part. However, among the lock chips in the Custom Line (CX), "Valkyrie" and "Emperor" are each limited to only one each; all other lock chips can be used in multiples.')}</Rule>
          <Rule n={4}>{T('กำหนดลำดับการยิงสำหรับทีมของคุณ', 'Decide the shooting order for your team.')}</Rule>
          <Rule n={5}>{T("ระหว่างแมตช์ ห้ามเปลี่ยนลำดับ Beys การรวมกัน ลำดับการยิง หรือสมาชิกทีม โดยไม่ได้รับอนุมัติจากผู้ตัดสิน", "During a match, you cannot change the order of Beys, their combinations, the shooting order, or team members without the judge's approval.")}</Rule>
          <Rule n={6}>{T('หากทีมไม่สามารถเตรียม Beyblades ตามจำนวนที่ต้องการได้ ผู้ตัดสินจะมอบ Beyblades เช่าให้ ในกรณีนี้ สมาชิกทุกคนในทีมต้องใช้ Beyblade เช่าในทุกการต่อสู้', 'If a team cannot prepare the required number of Beyblades, the judge will provide rental Beyblades. In this case, all team members must use the rental Beyblade for every battle.')}</Rule>
          <p className="font-semibold text-indigo-800 mb-3 mt-5 text-sm">{T('— เกี่ยวกับผลลัพธ์ —', '— About the Outcomes —')}</p>
          <Rule n={1}>{T('การแข่งขันดำเนินในรูปแบบการแพ้คัดออก', 'Matches are conducted in an elimination format.')}</Rule>
          <Rule n={2}>{T('การต่อสู้แต่ละครั้งใช้กฎการได้ 2 คะแนนก่อน', 'Each battle follows a first-to-2-points rule.')}</Rule>
          <Rule n={3}>{T('Blader ที่ชนะดำเนินต่อไปในการต่อสู้ถัดไป ในขณะที่ Blader ที่แพ้จะถูกแทนที่ด้วยสมาชิกทีมคนถัดไป', 'The winning Blader continues to the next battle, while the losing Blader is replaced by the next team member.')}</Rule>
          <Rule n={4}>{T("ทีมที่เอาชนะ Bladers ทั้งหมดของทีมตรงข้ามก่อนเป็นผู้ชนะ", "The team that defeats all the opposing team's Bladers first wins the match.")}</Rule>
          <Rule n={5}>{T('เมื่อการต่อสู้สิ้นสุดและฝ่ายตรงข้ามใหม่เข้ามา คะแนนที่ได้รับจนถึงจุดนั้นจะไม่ถูกนำไปใช้ต่อ (ตัวอย่าง: หากการต่อสู้แรกสิ้นสุดด้วยคะแนน 2-1 คะแนนที่ได้รับโดย Blader แรกของทั้งสองทีมจะไม่ถ่ายโอนไปยัง Blader ที่สอง และการต่อสู้ใหม่เริ่มต้นจาก 0-0)', "When a battle is decided and a new opponent steps in, any points earned up to that point do not carry over. (Example: If the first battle ends with a score of 2-1, the points earned by both teams' first Bladers do not transfer to the second Bladers, and the new battle starts from 0-0.)")}</Rule>
        </Section>

        {/* 14 */}
        <Section id="s14" titleTh="อื่น ๆ (Others)" titleEn="Others" isEnglish={isEnglish} color="gray">
          <Rule n={1}>{T('การเข้าร่วมกิจกรรมหรือทัวร์นาเมนต์ ถือว่าคุณเข้าใจกฎระเบียบแล้ว', 'By participating in an event or tournament, it is assumed that you understand the regulations.')}</Rule>
          <Rule n={2}>{T('ห้ามให้คำแนะนำที่ขัดขวางการเล่นที่ยุติธรรม หรือการเชียร์อย่างเกินขอบเขตที่ทำให้ผู้เล่นรู้สึกกดดัน', 'Giving advice that disrupts fair play or excessive cheering that intimidates players is prohibited.')}</Rule>
          <Rule n={3}>{T('ห้ามกระทำการด้วยวาจาที่หยาบคาย การใส่ร้าย หรือพฤติกรรมที่เป็นอันตรายต่อผู้อื่น เช่น ผู้เล่น ผู้ชม เจ้าหน้าที่ ผู้ตัดสิน ระหว่างการเข้าร่วมหรือชมทัวร์นาเมนต์และกิจกรรม', 'Any acts of verbal abuse, defamation, or other harmful behavior against people such as players, spectators, staff, judges during participation in or spectating at tournaments and events are prohibited.')}</Rule>
          <Rule n={4}>{T('ห้ามกระทำการที่ก่อให้เกิดความไม่สะดวกแก่ผู้อื่น หรือขัดขวางการดำเนินงานของกิจกรรมหรือทัวร์นาเมนต์', 'Acts that cause inconvenience to others or interfere with the operation of the event or tournament are prohibited.')}</Rule>
          <Rule n={5}>{T('ห้ามใช้ชื่อที่ไม่เหมาะสมซึ่งละเมิดความสงบเรียบร้อยและศีลธรรมอันดี หรือชื่อ (ชื่อเต็ม) ที่สามารถระบุข้อมูลส่วนบุคคลสำหรับชื่อ Blader เมื่อเข้าร่วมทัวร์นาเมนต์/กิจกรรม', 'Using inappropriate names that violate public order and morals, or names (full names) that can identify personal information for Blader names when participating in a tournament/event is prohibited.')}</Rule>
          <Rule n={6}>
            {T('เมื่อแชร์วิดีโอหรือภาพถ่ายของทัวร์นาเมนต์หรือกิจกรรมบนเว็บไซต์สตรีมมิ่งหรือโซเชียลมีเดีย ห้ามกระทำการหรือเนื้อหาใด ๆ ที่อาจนำไปสู่การระบุข้อมูลส่วนบุคคลของผู้เล่นหรือผู้ชม หรืออาจส่งผลให้เกิดการใส่ร้าย โดยเด็ดขาด', 'When sharing videos or photos of tournaments or events on video streaming sites or social media, any actions or content that could lead to identification of personal information of players or spectators, or that could result in defamation, are strictly prohibited.')}
            <SubBlock label="" items={T([
              'ในกรณีเกิดข้อพิพาทกับบุคคลที่สามอันเนื่องมาจากเนื้อหาที่โพสต์ (รวมถึงวิดีโอและรูปภาพ) ผู้อัปโหลดรับผิดชอบในการแก้ไขข้อขัดแย้งด้วยค่าใช้จ่ายของตนเอง โปรดทราบว่า Tomy Company Limited ไม่รับผิดชอบในกรณีเหล่านี้',
            ], [
              'In the event of a dispute with a third party arising from the posted content (including videos and images), the uploader is responsible for resolving the conflict at their own expense. Please note that Tomy Company Limited is not responsible in the case of such occurrences.',
            ])} />
          </Rule>
          <Rule n={7}>{T('ปฏิบัติตามกฎระเบียบและสนุกกับการเข้าร่วมกิจกรรมและทัวร์นาเมนต์ การไม่ปฏิบัติตามกฎระเบียบอาจส่งผลให้ถูกตัดสิทธิ์', 'Follow the regulations and enjoy participating in events and tournaments. Failure to adhere to the regulations may result in disqualification.')}</Rule>
          <Rule n={8}>{T('หากคุณไม่ปฏิบัติตามการตัดสินของเจ้าหน้าที่หรือผู้ตัดสินเกี่ยวกับการใช้ "Beyblade X" คุณอาจถูกขอให้งดเว้นจากการเข้าร่วมกิจกรรมหรือทัวร์นาเมนต์', 'If you do not comply with the staff or judge\'s decisions regarding the use of "Beyblade X", you may be asked to refrain from participating in the event or tournament.')}</Rule>
        </Section>

      </div>

      {/* CTA */}
      <section className="cta-section py-12 bg-blue-700">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-white mb-3">{T('พร้อมลงสนามหรือยัง?', 'Ready to Battle?')}</h2>
          <p className="text-blue-200 mb-6">{T('ดูตารางการแข่งขัน Beyblade X ที่ NK Board Game', 'See upcoming Beyblade X tournaments at NK Board Game')}</p>
          <a href="/beyblade" className="btn btn-secondary btn-lg">{T('← กลับหน้า Beyblade', '← Back to Beyblade')}</a>
        </div>
      </section>
    </div>
  );
};

export default BeybladeRegulations;
