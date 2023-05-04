import React from "react";

const QuestionAnswer = () => {
  return (
    <section>
      <div>
        <h1 className="mt-4 text-center text-light py-3 bg-dark">FAQ</h1>

        <p className="text-center mb-5 text-light py-3 bg-dark">
          Find the answers for the most frequently asked questions below
        </p>
      </div>
      <div className="row mx-5">
        <div className="col-md-6 col-lg-3 mb-4">
          <h6 className="mb-3 text-dark h3">How to contact a chef?</h6>
          <p>
            To Book your favorite chef simply you have to click the contact us
            button. Then you will see all the information. Just fill the
            information then we will contact with you.
          </p>
        </div>

        <div className="col-md-6 col-lg-3 mb-4">
          <h6 className="mb-3 text-dark h3">How payment Works?</h6>
          <p>
            Currently, we offer monthly subscription for daily blog and recipes. You can upgrade or
            cancel your monthly account at any time with no further obligation.
          </p>
        </div>

        <div className="col-md-6 col-lg-3 mb-4">
          <h6 className="mb-3 text-dark h3">Is it Safe?</h6>
          <p>
            Absolutely because our chefs works all over japan. They are well trained and professional.
          </p>
        </div>

        <div className="col-md-6 col-lg-3 mb-4">
          <h6 className="mb-3 text-dark h3">
         A question that
            is longer then the previous one?
          </h6>
          <p>
            <strong>
              <u>Yes, it is possible!</u>
            </strong>{" "}
            You can cancel your subscription anytime in your account. Once the
            subscription is cancelled, you will not be charged next month.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuestionAnswer;
