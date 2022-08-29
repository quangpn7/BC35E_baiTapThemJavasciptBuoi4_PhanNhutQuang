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
 * +29 ngày: 2
 * 5. TRƯỜNG HỢP NGƯỜI DÙNG NHÂP NGÀY 31 TRONG THÁNG KHÔNG CÓ NGÀY 30 -> BÁO NGÀY KHÔNG HỢP LỆ
 * 6. Trường hợp người dùng những ngày cuối tháng thì sẽ cho qua tháng mới bằng cách gán (day = 1) và (month +=1)
 * 7. Trường hợp người dùng nhập ngày đầu năm thì gán (day = 1),(month = 1) và (year += 1)
 * 8. Người dùng chọn ngày hôm qua thì tương tự nhưng đổi các dấu (+) -> (-)
 * -ĐẦU RA:
 * +NGÀY HÔM TRƯỚC LÀ: preDay
 * +NGÀY HÔM SAU LÀ: nextDay
 *
 */

var day = 12;
var month = 11;
var year = 2012;
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
  } else if (day <= 29 && month == 2) {
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
  } else if (valid == true && day == 29 && month == 2) {
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

  if (dateResult == dateNoResult) {
    document.getElementById("dateResult").innerHTML = dateNoResult;
  } else {
    document.getElementById("dateResult").innerHTML =
      "<p>" +
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
  } else if (day <= 29 && month == 2) {
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
    day = 29;
    month -= 1;
  } else if (valid == true && day == 1 && arr30.includes(month)) {
    day = 31;
    month -= 1;
  } else if (valid == true) {
    day -= 1;
  } else {
    dateResult = dateNoResult;
  }

  if (dateResult == dateNoResult) {
    document.getElementById("dateResult").innerHTML = dateNoResult;
  } else {
    document.getElementById("dateResult").innerHTML =
      "<p>" +
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
