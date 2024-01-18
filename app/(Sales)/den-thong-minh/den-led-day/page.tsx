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
            Đèn Led Downlight Thông Minh
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6">
            <Image
              className="rounded-2xl basis-1/2"
              src="/assets/images/product/thumnail/1668570002-led-day.png"
              width={1000}
              height={500}
              alt=""
            />
            <div className="basis-1/2 ">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Công suất</p>
                <p>15W/5m</p>
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
                <p>1200lm/5m</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Chiều dài</p>
                <p>5m</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Tuổi thọ</p>
                <p>25.000h</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Thay đổi nhiệt độ màu</p>
                <p>(2700 ÷ 6500K) + RGB</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Thay đổi cường độ</p>
                <p>10 ÷ 100%</p>
              </div>

              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p className="text-left">Tiêu chuẩn áp dụng</p>
                <p className="text-right">
                  TCVN 7722-1/ IEC; TCVN 10885-2-1/ IEC 62722-2-1
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
            <h5 className="font-semibold text-[22px]">
              Đèn LED dây thông minh – Chiếu sáng tiện ích cho mọi không gian
              hiện đại
            </h5>
            <p>
              Các sản phẩm đèn thông minh đang trở thành lựa chọn xu hướng khi
              đáp ứng tính tiện nghi cao cho các đối tượng người dùng. Điển hình
              và là 1 trong những sản phẩm được đánh giá cao hiện nay phải kể
              đến mẫu đèn LED dây thông minh. Vậy, bạn đã biết gì về mẫu thiết
              bị chiếu sáng hiện đại này?
            </p>
            <h5 className="font-semibold text-[22px]">
              Giới thiệu chung về đèn LED dây thông minh
            </h5>
            <Image
              src="/assets/images/product/thumnail/1692180786-Den-Led-Day-copy.jpg"
              width={1210}
              height={800}
              alt=""
            />
            <p>
              Ánh sáng được xem là 1 phần quan trọng trong bất kì không gian
              nào. Theo đó, không chỉ đơn thuần là cung cấp nguồn sáng mà các
              sản phẩm đèn chiếu sáng hiện nay còn được nghiên cứu, cho ra mắt
              với vai trò trang trí, tạo nên điểm nhấn riêng. Trên cơ sở đó, góp
              phần tăng sức hút cho ngôi nhà của bạn. Đèn LED dây thông minh là
              1 trong những lựa chọn điển hình cho bạn lúc này.
            </p>
            <p>
              Với hệ thống màu sắc đa dạng, sản phẩm phục vụ nhu cầu chiếu sáng
              thẩm mỹ cho các đối tượng người dùng.
            </p>
            <p>
              Kích thước chiều dài dây đèn lên đến 5m, cùng với đó là các mắt
              LED được thiết kế, bố trí suốt dọc chiều dài dây, người dùng có
              thể thuận tiện trong việc tạo hình, trang hoàng những khu vực khác
              nhau.
            </p>
            <p>
              Đặc biệt, điểm nổi bật hơn cả ở sản phẩm đèn dây thông minh này đó
              là người dùng hoàn toàn có thể điều khiển, bật/ tắt đèn thông qua
              giọng nói. Đây là yếu tố góp phần gia tăng sự tiện ích, nâng tầm
              chất lượng sinh hoạt đáng kể cho người dùng.
            </p>
            <p>
              Có thể xem mẫu đèn LED dây thông minh này là sản phẩm xu hướng,
              đáp ứng đúng xu thế thời đại. Việc trang trí, làm đẹp không gian
              giờ đây nhanh chóng và đơn giản hơn rất nhiều dưới sự hỗ trợ của
              mẫu đèn led cao cấp này.
            </p>
            <h5 className="font-semibold text-[22px]">
              Ưu điểm nổi bật của bộ đèn Led dây thông minh FPT Smart Home
            </h5>
            <p>
              Sản phẩm hội tụ nhiều ưu điểm vượt bậc. Đó là lý do mà mẫu đèn led
              dây thông minh trở thành lựa chọn được đánh giá cao hàng đầu cho
              việc trang trí không gian nhà thông minh ở thời điểm hiện tại.
            </p>
            <h5 className="font-semibold text-[22px]">
              Điều khiển bật/ tắt nhanh, linh hoạt
            </h5>
            <p>
              Với đèn led dây này, người dùng có thể điều khiển linh hoạt việc
              bật tắt, chuyển đổi trạng thái màu sắc bằng giọng nói tiếng Việt
              hoặc thông qua các thiết bị di động kết nối.
            </p>
            <p>
              Như vậy, không cần phải di chuyển đến các vị trí công tắc như
              những sản phẩm truyền thống khác, với thiết bị chiếu sáng hiện đại
              này, bạn chỉ cần ngồi tại chỗ mà vẫn có thể thao tác tất tần tật
              những yêu cầu mà bản thân mong muốn.
            </p>
            <p>
              Khả năng nhận diện giọng nói cực chuẩn từ thiết bị cũng là điểm
              mạnh cực lớn, giúp đèn bật tắt tức thời, không xảy ra tình trạng
              gián đoạn không mong muốn cho người dùng.
            </p>
            <p>
              Đặc biệt, với bộ đèn Led dây thông minh này, bạn còn có thể điều
              khiển theo kịch bản hay điều khiển chức năng hẹn giờ bật/ tắt
              tương ứng với lịch trình sinh hoạt của gia đình mình.
            </p>
            <h5 className="font-semibold text-[22px]">
              Cung cấp nguồn sáng chuẩn hiện đại cho mỗi không gian
            </h5>
            <p>
              Thiết bị chiếu sáng thông minh này đặc trưng với hơn 16 triệu màu
              sắc. Các chip LED cao cấp được ứng dụng, cho dải màu chất lượng
              cao, ánh sáng ổn định. Chính vì thế, người dùng có thể linh hoạt
              cài đặt, lựa chọn và tùy chỉnh nguồn sáng ấm hoặc lạnh theo nhu
              cầu của mình.
            </p>
            <p>
              Đặc biệt, có thể cài đặt các ngữ cảnh theo sở thích cá nhân. Qua
              đó, vừa góp phần nâng tầm tính thẩm mỹ cho không gian, vừa thể
              hiện cá tính riêng của chính bạn.
            </p>
            <h5 className="font-semibold text-[22px]">
              Dễ dàng trong việc lắp đặt, sử dụng
            </h5>
            <p>
              Kết cấu đơn giản với cuộn dây dài, người dùng có thể dễ dàng lắp
              đặt, tạo hình mà không mất quá nhiều thời gian, công sức.
            </p>
            <p>
              Trong quá trình lắp đặt đèn Led dây, bạn có thể uốn cong theo ý
              thích mà không phải e ngại về việc phải chỉnh sửa mạch điện phức
              tạp hay xảy ra những ảnh hưởng đến hoạt động của đèn.
            </p>
            <p>
              Trong quá trình hoạt động, đèn led dây thông minh này cũng hoàn
              toàn an toàn cho cả người dùng lẫn các vật nuôi.
            </p>
            <Image
              src="/assets/images/product/thumnail/1692180786-Den-Led-Day1-copy.jpg"
              width={1210}
              height={800}
              alt=""
            />
            <h5 className="font-semibold text-[22px]">
              Ứng dụng sản phẩm như thế nào?
            </h5>
            <p>
              Đèn LED dây thông minh FPT Smart Home có thể xem là sản phẩm được
              ứng dụng chính cho mục đích trang trí, làm đẹp tại các gia đình.
              Bạn có thể bố trí đèn tại phòng khách, khu vực phòng ngủ, phòng
              đọc sách, phòng làm việc,... 1 cách sáng tạo, mang đến điểm nhấn
              riêng cho mỗi không gian.
            </p>
            <p>
              Trong đó, có thể tận dụng đèn cả ở những góc không gian hẹp, giúp
              cung cấp ánh sáng linh hoạt nhưng không để lộ nguồn sáng. Nhờ vậy,
              tạo nên những dải màu sắc đa dạng, rực rỡ cho các không gian này
            </p>
            <h5 className="font-semibold text-[22px]">Hẹn giờ tắt bật đèn</h5>
            <p>
              Chọn mua đèn LED dây thông minh không chỉ đơn thuần đáp ứng nhu
              cầu chiếu sáng cơ bản cho không gian mà cùng với đó, sản phẩm còn
              cho tính tiện ích cao trong công tác điều khiển. Đặc biệt, với
              thiết kế sang trọng, mẫu đèn này còn cho tính tương thích cao với
              hầu hết mọi khu vực lắp đặt. Chọn mua sản phẩm ngay hôm nay qua
              Hotline 19006600. Tin chắc rằng, bạn sẽ thật sự hài lòng về những
              gì mà thiết bị chiếu sáng hiện đại này mang lại cho chính mình
              đấy!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
