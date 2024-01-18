import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="">
      <div className="text-center flex flex-col py-[100px] bg-slate-100">
        <div className="container">
          <h4 className="text-h5 text-gray-400 font-semibold">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold">
            Đèn thông minh tại FPT Smart Home
          </h2>
          <div></div>
        </div>
      </div>
      <div className="text-center flex flex-col py-[100px] ">
        <div className="container border-b-[1px] pb-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold">
            Đèn Led Panel Thông Minh
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6">
            <Image
              className="rounded-2xl basis-1/2"
              src="/assets/images/product/thumnail/1668569386-panel.png"
              width={1000}
              height={500}
              alt=""
            />
            <div className="basis-1/2 ">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Công suất</p>
                <p>40W</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Điện áp hoạt động</p>
                <p>220V/50Hz</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Chỉ số hoàn màu</p>
                <p>80</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Quang thông</p>
                <p>3600lm</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Tuổi thọ</p>
                <p>25.000h</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Thay đổi nhiệt độ màu</p>
                <p>3000 ÷ 6500K</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Thay đổi cường độ</p>
                <p>10 ÷ 100%</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Kích thước (DxRxC)</p>
                <p>600 x 600x10mm</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p className="text-left">Tiêu chuẩn áp dụng</p>
                <p className="text-right">
                  TCVN 7722-1/IEC 60598-1:2008 ; TCVN 10885-2-1/IEC
                  62722-2-1:2014
                </p>
              </div>
              <div className="flex items-center justify-between w-full  text-[18px] font-regular px-4 py-2">
                <p>Chuẩn kết nối</p>
                <p>Bluetooth Mesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col  ">
        <div className="container border-b-[1px] pb-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10">
            Kiến thức về sản phẩm
          </h2>
          <div className="flex flex-col items-start gap-4 text-left text-[18px]">
            <p>
              Đèn LED Panel thông minh FPT Smart Home là loại đèn LED chiếu sáng
              có thiết kế kiểu dáng tròn, vuông hoặc chữ nhật được lắp đặt âm
              trần hoặc thả trần. Thiết bị đèn thông minh này không chỉ thích
              hợp chiếu sáng cho không gian gia đình mà còn được lắp đặt tại rất
              nhiều các công trình công cộng, trường học, bệnh viện, văn phòng,…
            </p>
            <p>
              Áp dụng công nghệ LED chiếu sáng, đèn Led Panel thông minh đến từ
              nhà FPT Smart Home tạo ra ánh sáng ổn định, tối ưu hóa hiệu năng
              sử dụng. Đồng thời mang đến trải nghiệm điều khiển thông minh vượt
              xa nhu cầu chiếu sáng thông thường.
            </p>
            <h5 className="font-semibold text-[22px]">
              Ưu điểm của đèn LED Panel đến từ FPT Smart Home
            </h5>
            <p>
              Sản phẩm đèn LED Panel gây được ấn tượng tốt cho hầu hết mọi đối
              tượng khách hàng khi đã chọn mua, sử dụng. Dưới đây là các điểm
              nổi bật của sản phẩm:{" "}
            </p>
            <ul className="list-disc pl-10 gap-2 flex flex-col">
              <li>
                Đèn cho khả năng thao tác bật/ tắt 1 cách linh hoạt thông qua
                giọng nói bằng tiếng Việt thông qua bộ điều khiển trung tâm FPT
                Play Box S. Người dùng nhờ đó có thể chỉ cần ngồi tại chỗ mà vẫn
                điều khiển được thiết bị 1 cách linh hoạt. Với các gia đình có
                người già, trẻ em, đây sẽ là lựa chọn thông minh, giúp tiết kiệm
                công sức, đảm bảo sự an toàn trong quá trình sử dụng. Qua đó,
                tối ưu hóa tính tiện nghi trong sinh hoạt.{" "}
              </li>
              <li>
                Công nghệ chip LED thông minh được ứng dụng cho tính tiết kiệm
                điện năng vượt bậc mà vẫn đảm bảo cường độ ánh sáng ổn định.{" "}
              </li>
              <li>
                Ngay cả khi sử dụng đèn liên tục hàng giờ liền, với nguồn sáng
                được cung cấp ổn định từ thiết bị chiếu sáng này, bạn cũng sẽ
                không xảy ra tình trạng đau hay mỏi mắt.
              </li>
              <li>
                Đặc biệt, sản phẩm cho phép hẹn giờ bật, tắt theo lịch trình
                sinh hoạt của mỗi gia đình. Việc điều khiển, sử dụng thông qua
                kết nối Bluetooth Mesh cũng đảm bảo được sự nhanh chóng, tiện
                nghi tối đa.
              </li>
              <li>
                Đèn LED Panel thông minh FPT Smart Home ứng dụng công nghệ chiếu
                sáng diện rộng giúp phân bổ ánh sáng đồng đều cho toàn bộ không
                gian. Tuổi thọ đèn kéo dài đến 25.000h chiếu sáng, tương đương
                hơn 10 năm (trung bình chiếu sáng 6h/ngày) cho ánh sáng trung
                thực với mắt người với chỉ số hoàn màu CRI = 80.
              </li>
            </ul>
            <h5 className="font-semibold text-[22px]">
              Ứng dụng đèn LED Panel thông minh
            </h5>
            <p>
              Nếu đặc thù diện tích chiếu sáng mặt sàn lớn với nhu cầu chiếu
              sáng đồng đều thì sử dụng đèn LED Panel thông minh FPT Smart Home
              là giải pháp nhà thông minh hoàn hảo nhất.
            </p>
            <p>
              Sản phẩm có 3 dạng hình vuông, tròn và chữ nhật - đều giúp tạo ra
              nguồn ánh sáng lấp đầy từng góc trong không gian phòng làm việc,
              phòng học, bệnh viện, trung tâm thương mại,… Vì ứng dụng công nghệ
              chiếu sáng LED nên ánh sáng từ đèn LED Panel hoạt động cực kỳ ổn
              định, không xảy ra hiện tượng nhấp nháy, bảo vệ mắt cho học sinh
              và dân văn phòng khi làm việc hoặc ngồi học trong không gian đèn
              LED suốt ngày dài.
            </p>
            <p>
              Dù ở bất kỳ khu vực nào, đèn LED Panel thông minh của FPT Smart
              Home cũng luôn là sự lựa chọn hàng đầu không chỉ cung cấp nguồn
              sáng ổn định, tạo ra trải nghiệm tuyệt vời cho người dùng mà còn
              nâng tầm giá trị cho không gian với thiết kế hiện đại, chỉnh chu
              trong từng đường nét. Để đặt mua sản phẩm nhanh chóng, chuẩn chất
              lượng nhất, quý khách hàng có thể liên hệ với chúng tôi ngay qua
              Hotline 19006600 hôm nay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
