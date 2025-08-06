import React from "react";

export default function MapContact() {
  return (
    <div className="bg-white container mx-auto ">
      <h2 className="text-3xl lg:text-3xl font-extrabold  leading-snug text-black mb-10">
        ติดต่อเรา
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="w-full h-auto relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988899.4526924258!2d99.19427889907142!3d13.189537640563378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102d3aaaa9c9c57%3A0xadca54735d765f01!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4l-C4teC5gOC4reC5h-C4meC5guC4peC4q-C4sOC4geC4tOC4iCDguIjguLPguIHguLHguJQ!5e0!3m2!1sth!2sth!4v1754403265509!5m2!1sth!2sth"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="text-black">
          <h3 className="text-xl font-bold mb-4">ที่ตั้งบริษัท</h3>
          <p className="font-light">Company Location</p>
          <hr className="border-[#2B3990] border-1 my-5"></hr>
          <p className="font-light w-80">
            บริษัท ทีเอ็น โลหะกิจ จำกัด เลขที่ 81 หมู่ที่ 9 ถนน344 บ้านบึง-แกลง
            ตำบลหนองอิรุณ อำเภอบ้านบึง จ.ชลบุรี 20220
          </p>
        </div>
      </div>
    </div>
  );
}
