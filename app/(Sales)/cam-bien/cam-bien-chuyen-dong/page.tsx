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
            Thiết bị Cảm Biến tại FPT Smart Home
          </h2>
          <div></div>
        </div>
      </div>
      <div className="text-center flex flex-col py-[100px] ">
        <div className="container border-b-[1px] pb-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold">
            Cảm Biến Chuyển Động
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6">
            <Image
              className="rounded-2xl basis-1/2"
              src="/assets/images/product/thumnail/1668569403-cam-bien-chuyen-dong.png"
              width={1000}
              height={500}
              alt=""
            />
            <div className="basis-1/2 ">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Công suất</p>
                <p>9W</p>
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
                <p>810 Im</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Tuổi thọ</p>
                <p>20.000 h</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Thay đổi nhiệt độ màu</p>
                <p>(3000K- 6500K)+ RGB</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Thay đổi cường độ</p>
                <p>10 ÷ 100%</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Kích thước (ØxH)</p>
                <p>60x109mm</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Khối lượng</p>
                <p>44.5±0.5 g</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p className="text-left">Tiêu chuẩn áp dụng</p>
                <p className="text-right">
                  TCVN 10885-2-1/IEC 62722-2-1; TCVN 7722-2-2/IEC 60598-2-2
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
              Thiết kế nhà thông minh đang trở thành một trong những xu hướng
              hàng đầu hiện nay. Một trong những thiết bị quan trọng không thể
              thiếu trong hệ thống nhà thông minh đó là cảm biến chuyển động.
              Vậy điểm nổi bật của sản phẩm này là gì?
            </p>
            <h5 className="font-semibold text-[22px]">
              Cảm biến chuyển động là gì?
            </h5>
            <p>
              Cảm biến chuyển động (máy phát hiện chuyển động) đây là thiết bị
              điện thông minh với khả năng phát hiện các chuyển động vật lý, từ
              đó bật hoặc tắt chức năng của các thiết bị liên quan trong hệ
              thống.
            </p>
            <p>
              Cảm biến có khả năng phát hiện chuyển động vật lý trong môi trường
              thật hay thiết bị một cách chính xác. Thời gian phát hiện chuyển
              động và xử lý cực kỳ nhanh chóng.
            </p>
            <p>
              Cơ chế hoạt động của cảm biến chuyển động thông minh với sự kết
              nối chặt chẽ trong cùng hệ thống, phần mềm xử lý tín hiệu. Nhờ đó,
              các chuyển động vật lý được thu về sẽ nhanh chóng chuyển thành các
              hành động, tín hiệu, thông tin khác tương ứng.
            </p>
            <h5 className="font-semibold text-[22px]">
              Chức năng của cảm biến chuyển động
            </h5>
            <p>
              Cảm biến chuyển động FPT Smart Home sử dụng kết nối BLE, ZigBee có
              thể liên kết với những thiết bị liên quan và thực hiện chức năng
              một cách chính xác, thống nhất.
            </p>
            <h5 className="font-semibold text-[22px]">
              Cảm biến phát hiện những chuyển động vật lý trong môi trường
            </h5>
            <p>
              Chức năng chính của thiết bị cảm biến chuyển động là phát hiện kịp
              thời những chuyển động vật lý trong môi trường. Chẳng hạn, khi
              phát hiện chuyển động bất thường, đặc biệt là dấu hiệu của sự đột
              nhập trái phép, cảm biến sẽ tự động gửi cảnh báo hay kích hoạt một
              số chức năng liên quan.
            </p>
            <p>
              Với sự hỗ trợ của cảm biến thông minh trong ngôi nhà, gia đình vừa
              nâng cao tinh thần cảnh giác, vừa bảo vệ sự an toàn trong những
              tình huống nhất định.
            </p>
            <h5 className="font-semibold text-[22px]">
              Bật/ tắt các thiết bị trong hệ thống khi phát hiện chuyển động
            </h5>
            <p>
              Khi phát hiện chuyển động vật lý trong không gian, cảm biến còn có
              thể bật/ tắt các thiết bị, chẳng hạn như đèn, quạt, điều hoà,...
              Tuỳ theo những thiết bị được lắp đặt, liên kết trong hệ thống là
              gì mà chúng ta có thể tận dụng tiện ích từ nó.
            </p>
            <p>
              Như vậy, chúng ta không cần phải sử dụng công tắc như truyền thống
              nữa. Thay vào đó, hệ thống của cảm biến chuyển động sẽ hoạt động 1
              cách tự động, mang tới sự tiện lợi và tiết kiệm thời gian tối đa.
            </p>
            <h5 className="font-semibold text-[22px]">
              Bảo vệ gia đình bạn trong điều kiện tốt nhất khi sử dụng cảm biến
              chuyển động
            </h5>
            <p>
              An ninh và tiện ích là hai tiêu chí được các hộ gia đình hiện nay
              quan tâm. Đó là lí do tại sao lắp đặt cảm biến chuyển động được áp
              dụng tại nhà ở thông minh, khách sạn, biệt thự,...
            </p>

            <p>
              Cơ chế hoạt động của thiết bị sẽ bảo vệ gia đình bạn bất kể ngày
              hay đêm, duy trì liên tục 24/7. Những cảnh báo, tín hiệu sẽ được
              gửi đến điện thoại hoặc phát thành tiếng, từ đó các thành viên kịp
              thời phản ứng, chạy trốn.
            </p>
            <p>
              Mặt khác, trong gia đình có trẻ nhỏ, cảm biến còn hỗ trợ dò tìm
              chuyển động và cảnh báo khi trẻ đi vào vùng nguy hiểm. Chức năng
              này đã và đang giúp bố mẹ chăm sóc trẻ nhỏ, hạn chế rủi ro tối ưu.
            </p>

            <h5 className="font-semibold text-[22px]">
              Ứng dụng của cảm biến chuyển động
            </h5>
            <p>
              Nhờ những chức năng và ưu điểm kể trên mà cảm biến chuyển động
              hiện được ứng dụng rộng rãi. Tại nhà thông minh, chúng ta dễ dàng
              bắt gặp thiết bị cảm biến điện tử, hồng ngoại, nhiệt độ. Chúng ta
              có thể kết hợp cảm biến với điện thoại thông minh, tivi thông
              minh, máy tính bảng hay hệ thống an ninh vật lý.
            </p>
            <p>
              Ngoài ra, ở những khách sạn cao cấp, biệt thự, penthouse, người ta
              cũng lắp đặt cảm biến vật lý và hệ thống thiết bị thông minh kèm
              theo. Điều này mang tới những trải nghiệm tuyệt vời và nâng cao
              chất lượng sinh sống, nghỉ ngơi.
            </p>
            <p>
              Tuy vậy khi thiết kế và thi công cảm biến chuyển động, hãy lưu ý
              tới vị trí lắp đặt để tối ưu hoá chức năng và tăng tỉ lệ cảnh báo
              chính xác.
            </p>
            <iframe
              width="1210"
              height="815"
              src="https://www.youtube.com/embed/GHeIFy92OL0?si=S3BSPBlcnlgyZPpH"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <p>
              Với sản phẩm cảm biến chuyển động này, ngôi nhà của chúng ta sẽ
              trở nên “thông minh”, hiện đại và tiện lợi hơn rất nhiều. Nếu như
              bạn đang có nhu cầu tìm mua thiết bị cảm biến chuẩn chất lượng,
              chính hãng, vui lòng liên hệ với chúng tôi theo Hotline 19006600
              ngay hôm nay để nhận tư vấn và hỗ trợ tốt nhất, chuyên nghiệp nhất
              nhé!
            </p>
            <h5 className="font-semibold text-[22px]">
              Xem thêm sản phẩm liên quan: Cảm biến cửa thông minh tại FPT Smart
              Home
            </h5>
            <iframe
              width="1210"
              height="800"
              src="https://www.youtube.com/embed/OSQaku9aXb0?si=YWeW4Kf6TgLSIVG2"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h5 className="font-semibold text-[22px]">
              Hướng dẫn kết nối cảm biến chuyển động Bluetooth Mesh của FPT
              Smart Home
            </h5>
            <iframe
              width="1210"
              height="800"
              src="https://www.youtube.com/embed/wnchZFYURfk?si=DX1E72gsX6lJ1gA0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
