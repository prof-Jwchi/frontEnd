// 학생들의 랜덤 발표 순서를 정하는 함수
function getRandomPresentationOrder(people) {
  // 원본 배열을 수정하지 않기 위해 복사본 생성
  const shuffledPeople = [...people];
  
  // Fisher-Yates 알고리즘을 사용하여 배열 섞기
  for (let i = shuffledPeople.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledPeople[i], shuffledPeople[j]] = [shuffledPeople[j], shuffledPeople[i]];
  }
  
  return shuffledPeople;
}

// 버튼 클릭 이벤트에 연결
const btn = document.getElementById("buttonId");
const result1 = document.getElementById("result1");

btn.addEventListener("click", function () {
  // student.js에서 정의된 people 배열이 제대로 로드되었는지 확인
  console.log("현재 people 배열:", people);
  console.log("people 배열 길이:", people.length);
  
  // 모든 학생의 랜덤 발표 순서 생성
  const presentationOrder = getRandomPresentationOrder(people);
  
  // 발표 순서를 1, 2, 3... 번호와 함께 표시하기 위한 포맷팅
  const formattedOrder = presentationOrder.map((person, index) => 
    `${index + 1}. ${person}`
  ).join('<br>');
  
  // 결과 표시 (첫 번째 결과 영역에만 표시)
  result1.innerHTML = formattedOrder;
});
