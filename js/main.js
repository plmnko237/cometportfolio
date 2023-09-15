"use strict";

$(function () {
  // 메인비주얼 효과
  const video1 = $("#video1").hasClass("on");
  const circle = $(".rotate_circle").hasClass("off");
  const main_tit = $("#main_b > h2").hasClass("off");

  //트리거이벤트
  $(document).on("click", function (e) {
    console.log(e);
    $("#video1").play();
    $("#sound").play();
  });

  console.log(main_tit);
  if (video1) {
    setTimeout(() => {
      $("#video2").removeClass("off").addClass("on");
      $("#video1").removeClass("on").addClass("off");
    }, 41000);
  }
  if (circle) {
    setTimeout(() => {
      $(".rotate_circle").removeClass("off").addClass("on");
    }, 41000);
  }
  if (main_tit) {
    setTimeout(() => {
      $("#main_b > h2").removeClass("off").addClass("on");
    }, 41000);
  }

  //링크이동
  $("#going").on("click", function () {
    location.href = "https://plmnko237.github.io/cometportfolio/index.html";
  });

  //체크리스트
  function checkList() {
    //체크 점수 합산
    let totalScore = 0;
    //체크된 체크박스 수
    let checkedCount = 0;
    //해당 체크박스가 있는 행 찾기
    let $row = $(this).closest("tr");

    //해당 행의 체크박스를 반복하며 선택된 값을 합산
    $row.find(".chk").each(function () {
      if ($(this).prop("checked")) {
        totalScore += parseInt($(this).val());
        console.log(totalScore);
        checkedCount++;
      }
    });

    //만약 체크박스가 한 행에 2개이상 체크되면 경고
    if (checkedCount >= 2) {
      alert("한 항목에 2개 이상 체크할 수 없습니다.");
      //해당 행의 모든 체크를 해제
      $row.find(".chk").prop("checked", false);
    }

    //합산된 점수를 .total에 출력
    $(".total").text(totalScore);

    //경고문구
    if (totalScore > 0 && totalScore < 10) {
      $(".warning").text("* 우울감이 정상적인 수준입니다.").css({
        color: "tomato",
        marginBottom: "40px",
        textAlign: "center",
      });
    } else if (totalScore > 11 && totalScore < 20) {
      $(".warning")
        .text("* 주의가 필요합니다. 아래 버튼을 눌러 상담을 받아보세요.")
        .css({
          color: "tomato",
          marginBottom: "40px",
          textAlign: "center",
        });
    } else if (totalScore > 21 && totalScore < 30) {
      $(".warning")
        .text(
          "* 심각하게 우울감을 느끼는 상태입니다. 아래 버튼을 눌러 상담을 받아보세요."
        )
        .css({
          color: "tomato",
          marginBottom: "40px",
          textAlign: "center",
        });
    }
  }

  $(".chk").on("change", checkList);
});
