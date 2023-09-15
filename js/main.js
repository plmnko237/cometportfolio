"use strict";

$(function () {
  // 메인비주얼 효과
  const video1 = $("#video1").hasClass("on");
  const circle = $(".rotate_circle").hasClass("off");
  const main_tit = $("#main_b > h2").hasClass("off");

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
  $(".chk").on("change", function () {
    // 전체 체크박스의 value 값을 합산할 변수
    let totalScore = 0;

    // 모든 체크박스를 반복하여 값을 합산
    $(".chk").each(function () {
      if ($(this).prop("checked")) {
        const value = parseInt($(this).val());
        totalScore += value;
      }
    });

    // 중복 체크 방지를 위한 변수
    let hasDuplicate = false;

    // 각 행의 체크박스를 검사
    $(".chk").each(function () {
      const $row = $(this).closest("tr");

      // 현재 체크박스를 제외한 같은 행의 체크된 체크박스 개수
      const checkedCount = $row.find(".chk:checked").length;

      // 한 행에 2개 이상 체크된 경우
      if (checkedCount > 1) {
        alert("한 항목마다 한 개만 체크할 수 있습니다.");
        hasDuplicate = true;

        // 해당 행의 모든 체크박스 해제
        $row.find(".chk").prop("checked", false);
      }
    });

    // 중복이 없는 경우에만 .total에 출력
    if (!hasDuplicate) {
      $(".total").text(totalScore);
    }

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
  });
});
