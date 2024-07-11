import React, { useEffect } from "react";

const PaymentButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.5.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    const { IMP } = window;
    if (IMP) {
      IMP.init("imp66337235"); // 포트원 사용자 코드

      const paymentData = {
        pg: "html5_inicis", // PG사
        pay_method: "card", // 결제 수단
        merchant_uid: `mid_${new Date().getTime()}`, // 주문 번호
        amount: 1000, // 결제 금액
        name: "주문명:결제테스트", // 주문명
        buyer_name: "홍길동", // 구매자 이름
        buyer_tel: "010-1234-5678", // 구매자 전화번호
        buyer_email: "example@example.com", // 구매자 이메일
        buyer_addr: "서울특별시 강남구 삼성동", // 구매자 주소
        buyer_postcode: "123-456", // 구매자 우편번호
      };

      IMP.request_pay(paymentData, (rsp) => {
        if (rsp.success) {
          alert("결제가 완료되었습니다.");
        } else {
          alert("결제에 실패하였습니다.");
        }
      });
    } else {
      console.error("IMP 객체가 로드되지 않았습니다.");
    }
  };

  return <button onClick={handlePayment}>결제하기</button>;
};

export default PaymentButton;
