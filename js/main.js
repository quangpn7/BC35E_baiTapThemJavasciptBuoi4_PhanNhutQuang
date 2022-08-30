/**BÀI 1: TÌM NGÀY HÔM QUA VÀ NGÀY MAI CỦA NGÀY NHẬP VÀO
 * -GIẢ SỬ: người dùng nhập vào 3 ô ngày tháng năm, sau đó người dùng sẽ chọn tìm kiếm ngày hôm qua hoặc ngày mai, chương trình sẽ hiển thị ra kết quả ngày tháng năm.
 * -ĐẦU VÀO: người dùng nhập vào 3 ô ngày, tháng, năm
 * -XỬ LÝ:
 * 1. Đặt các biến cho ngày, tháng, năm lần lượt là day, month, year
 * 2. Đặt biến cho ngày mai là nextDay, hôm qua là preDay
 * 3. Khi người dùng bấm chọn ngày mai thì chạy lệnh (day += 1), nếu người dùng chọn hôm qua thì chạy lệnh (day += 1).
 * 4. Xác định rõ tháng đó có bao nhiêu ngày:
 * +31 ngày: 1,3,5,7,8,10,12
 * +30 ngày: 4,6,9,11
 * +28 ngày: 2
 * 5. TRƯỜNG HỢP NGƯỜI DÙNG NHÂP NGÀY 31 TRONG THÁNG KHÔNG CÓ NGÀY 30 -> BÁO NGÀY KHÔNG HỢP LỆ
 * 6. Trường hợp người dùng những ngày cuối tháng thì sẽ cho qua tháng mới bằng cách gán (day = 1) và (month +=1)
 * 7. Trường hợp người dùng nhập ngày đầu năm thì gán (day = 1),(month = 1) và (year += 1)
 * 8. Người dùng chọn ngày hôm qua thì tương tự nhưng đổi các dấu (+) -> (-)
 * -ĐẦU RA:
 * +NGÀY HÔM TRƯỚC LÀ: preDay
 * +NGÀY HÔM SAU LÀ: nextDay
 *
 */

var dateResult;
var dateNoResult = "Không hợp lệ";
var valid = true;

const arr31 = [1, 3, 4, 7, 8, 10, 12];
const arr30 = [4, 6, 9, 11];
//NGÀY HÔM SAU
document.getElementById("btnNextDay").onclick = function () {
  var day = document.getElementById("day").value * 1;
  var month = document.getElementById("month").value * 1;
  var year = document.getElementById("year").value * 1;
  if (day <= 31 && day !== 0 && month <= 12 && month !== 0 && month !== 2) {
    valid = true;
  } else if (day <= 28 && month == 2) {
    valid = true;
  } else {
    valid = false;
  }

  if (valid == true && day == 31 && month == 12) {
    day = 1;
    month = 1;
    year += 1;
  } else if (valid == true && day == 31 && arr31.includes(month)) {
    day = 1;
    month += 1;
  } else if (valid == true && day == 28 && month == 2) {
    day = 1;
    month += 1;
  } else if (valid == true && day == 30 && arr30.includes(month)) {
    day = 1;
    month += 1;
  } else if (valid == true) {
    day += 1;
  } else {
    dateResult = dateNoResult;
  }

  if (dateResult == dateNoResult && valid == false) {
    document.getElementById("dateResult").innerHTML = dateNoResult;
  } else {
    document.getElementById("dateResult").innerHTML =
      "<p class='mb-0'>" +
      "Ngày hôm sau là ngày: " +
      "<span class = 'text-danger'>" +
      day +
      "/" +
      month +
      "/" +
      year +
      "</span>" +
      "</p>";
  }
};
//NGÀY HÔM TRƯỚC
document.getElementById("btnPreDay").onclick = function () {
  var day = document.getElementById("day").value * 1;
  var month = document.getElementById("month").value * 1;
  var year = document.getElementById("year").value * 1;
  if (day <= 31 && day !== 0 && month <= 12 && month !== 0 && month !== 2) {
    valid = true;
  } else if (day <= 28 && month == 2) {
    valid = true;
  } else {
    valid = false;
  }

  if (valid == true && month == 8) {
    day = 31;
    month -= 1;
  }
  if (valid == true && day == 1 && month == 1) {
    day = 31;
    month = 12;
    year -= 1;
  } else if (valid == true && day == 1 && arr31.includes(month)) {
    day = 30;
    month -= 1;
  } else if (valid == true && day == 1 && month == 3) {
    day = 28;
    month -= 1;
  } else if (valid == true && day == 1 && arr30.includes(month)) {
    day = 31;
    month -= 1;
  } else if (valid == true) {
    day -= 1;
  } else {
    dateResult = dateNoResult;
  }

  if (dateResult == dateNoResult && valid == false) {
    document.getElementById("dateResult").innerHTML = dateNoResult;
  } else {
    document.getElementById("dateResult").innerHTML =
      "<p class='mb-0'>" +
      "Ngày hôm trước là ngày: " +
      "<span class = 'text-danger'>" +
      day +
      "/" +
      month +
      "/" +
      year +
      "</span>" +
      "</p>";
  }
};

/**BÀI 2: TÍNH NGÀY
 * -GIẢ SỬ: Người dùng nhập vào tháng và năm, sau đó trình duyệt sẽ trả về số ngày có trong tháng đó. (Xét cả năm nhuận và năm không nhuận)
 * -ĐẦU VÀO: Người dùng nhập vào tháng (monthB2), năm (yearB2)
 * -XỬ LÝ:
 * Kiểm tra năm đó có là năm nhuận hay không:
 * + yearB2 % 4 == 0 && yearB2 % 100 !== 0 || yearB2 % 400 == 0 -> Tháng 2 năm đó có 29 ngày.
 * -ĐẦU RA: Tháng....năm....có....ngày
 */

document.getElementById("btnCountDay").onclick = function () {
  var monthB2 = document.getElementById("monthB2").value * 1;
  var yearB2 = document.getElementById("yearB2").value * 1;
  var leapYear;
  var dateCount;

  if ((yearB2 % 4 == 0 && yearB2 % 100 !== 0) || yearB2 % 400 == 0) {
    leapYear = true;
  } else {
    leapYear = false;
  }

  if (monthB2 == 2 && leapYear == true) {
    dateCount = 29;
  } else if (monthB2 == 2 && leapYear == false) {
    dateCount = 28;
  } else if (arr31.includes(monthB2)) {
    dateCount = 31;
  } else {
    dateCount = 30;
  }
  //Vận dụng lại array31 từ bài 1
  document.getElementById(
    "dateResultB2"
  ).innerHTML = `<p class='mb-0 text-danger'>Tháng ${monthB2} có ${dateCount} ngày</p>`;
};

/**BÀI 3: ĐỌC SỐ NGUYÊN CÓ 3 CHỮ SỐ
 * -GIẢ SỬ: Người dùng nhập vào số nguyên có 3 chữ số, và màn hình sẽ hiển thị ra cách đọc của 3 chữ số đó
 * - ĐẦU VÀO: Người dùng nhập vào số có 3 chữ số (numB3)
 * - XỬ LÝ:
 * 1. Gán numB3 là số người dung nhập vào dưới number.
 * 2. Sử dụng slice() để tách từng số và gán vào 3 biến lần lượt là numH, numT và numU
 * 3. Xét array bao gồm các số đã được chỉnh sang cách đọc chữ bằng cách index array -1
 * 4. Ghép lại vào thành câu
 * - ĐẦU RA: kết quả
 *
 */
document.getElementById("btnRead").onclick = function () {
  var numB3 = document.getElementById("numB3").value;
  console.log(typeof numB3);
  var numTransArray = [
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
  ];

  var numH = numB3.slice(0, 1) * 1;
  var numT = numB3.slice(1, 2) * 1;
  var numU = numB3.slice(2, 3) * 1;
  //Translate số sang chữ
  //Hàng trăm
  numH = numTransArray[numH - 1];
  //Hàng chục
  if (numT == 0) {
    numT = "lẻ ";
  } else {
    numT = numTransArray[numT - 1] + " mươi";
  }
  //Hàng đơn vị
  if (numU == 0) {
    numU = "";
  } else {
    numU = numTransArray[numU - 1];
  }
  //DOM kết quả
  document.getElementById(
    "resultB3"
  ).innerHTML = `<span class='text-capitalize'>${numH}</span> trăm ${numT} ${numU}`;
};
