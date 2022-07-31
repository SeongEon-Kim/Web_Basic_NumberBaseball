// JS는 메인함수가 있다.
var answer = []; // 정답 초기화
var num_game = 0;
// 입력 숫자 초기화 
var number = [, , ,];

//버튼 누르고, 비어있지 않다면 집어넣는다  btn_click_event
function btn(num) {
    if (number[0] == null) {
        number[0] = num;
        document.getElementById("result_box_1").innerHTML = number[0];
    }
    else {
        if (number[1] == null) {
            number[1] = num;
            document.getElementById("result_box_2").innerHTML = number[1];
        }
        else {
            if (number[2] == null) {
                number[2] = num;
                document.getElementById("result_box_3").innerHTML = number[2];
            }
            else {   // 다 차있는데 더 누르면 그냥 초기화
                document.getElementById("result_box_1").innerHTML = null;
                document.getElementById("result_box_2").innerHTML = null;
                document.getElementById("result_box_3").innerHTML = null;
                number = [, , ,];
            }
        }
    }
}

function show_ans() {
    do {
        //Math.random() 함수는 0~1 사이의 부동소수점 난수 생성
        //Math.floor() 함수는 소수점 1번째 자리를 버림하여 정수를 리턴
        answer[0] = Math.floor(Math.random() * 10);
        answer[1] = Math.floor(Math.random() * 10);
        answer[2] = Math.floor(Math.random() * 10);
    }
    while (answer[0] == answer[1] || answer[1] == answer[2] || answer[2] == answer[0]);
    // 콘솔에선 정답 알 수 있게
    console.log(answer[0], answer[1], answer[2]);

}

function play_game() {
    var ball = 0;
    var strike = 0;
    var out = 0;

    // for 문 2개 중첩해서 돌려서 배열 두개 하나씩 비교한다.
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (number[i] == answer[j]) { // 같은 것을 발견했는데
                if (i == j) { strike++; }  // 위치가 같으면 스트라이크
                else
                    ball++;  // 위치가 다르면 볼
            }
        }
    }
    if (ball == 0 & strike == 0) {   // 0볼, 0스트라이크면 1아웃
        out++;
    }
    num_game++;  // 게임 횟수 추가

    if (strike == 3) {
        document.getElementById("result").innerHTML = "승리했습니다 다시 시작하세요!!!!";  // 3스트라이크면 정답
    }
    if (num_game == 9) {
        document.getElementById("result").innerHTML = "패배했습니다 다시 시작하세요!!!!";  // 9번하면 실패로 한다.
    }
    document.getElementById("ball_result").innerHTML = ball;
    document.getElementById("strike_result").innerHTML = strike;
    document.getElementById("out_result").innerHTML = out;
    document.getElementById("num_game").innerHTML = num_game;
    // console.log(ball, strike, out); 그냥 확인용
    document.getElementById("result_box_1").innerHTML = null;
    document.getElementById("result_box_2").innerHTML = null;
    document.getElementById("result_box_3").innerHTML = null;
    number = [, , ,];
}

function cancle_game() {   // 결정 취소 누르면 그냥 초기화
    document.getElementById("result_box_1").innerHTML = null;
    document.getElementById("result_box_2").innerHTML = null;
    document.getElementById("result_box_3").innerHTML = null;
    number = [, , ,];
}


// function billboard() { 이미지 동적생성? 포기,,
//     // var img = document.createElement("img")
//     // img.src = "/Users/gimseong-eon/Desktop/Workspace/StageusWorkspace/Week3/Week3_H/Zero.png";
//     // // img.width = 20;
//     // // img.height = 20;
//     // document.getElementById("billboard").appendChild(img);
//     var image = new image();
//     image.src = "Zero.png"
//     var Img = document.getElementById("Img");
//     Img.src = image.src;
// }

// JS 함수 
// event 함수

// 중복 코드 의심 필수!

// 변수는 가장 위에 같은 이름으로 지어도 js는 오류 안알려줌
