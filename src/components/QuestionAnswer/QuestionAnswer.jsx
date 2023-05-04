import React from "react";

const QuestionAnswer = () => {
  return (
    <section className="py-5 bg-dark">
      <div>
        <h1 className="mt-5 text-center text-light pt-3">FAQ</h1>

        <p className="text-center mb-5 text-light py-3 bg-dark">
          Find the answers for the most frequently asked questions below
        </p>
      </div>
      <div className="row mx-5">
        <div className="col-md-6 col-lg-3 mb-4 text-light">
          <h6 className="mb-3 h3">How to contact a chef?</h6>
          <p>
            To Book your favorite chef simply you have to click the contact us
            button. Then you will see all the information. Just fill the
            information then we will contact with you.
          </p>
        </div>

        <div className="col-md-6 col-lg-3 mb-4 text-light">
          <h6 className="mb-3 h3">How payment works?</h6>
          <p>
            Currently, we offer monthly subscription for daily blog and recipes. You can upgrade or
            cancel your monthly account at any time with no further obligation.
          </p>
        </div>

        <div className="col-md-6 col-lg-3 mb-4 text-light">
          <h6 className="mb-3 h3">Is it safe?</h6>
          <p>
            Absolutely because our chefs works all over japan. They are well trained and professional. The interesting thing is we never got any complain from any clients.
          </p>
        </div>

        <div className="col-md-6 col-lg-3 mb-4 text-light">
          <h6 className="mb-3  h3">Can't access recipes?</h6>
          <p>
            To access the recipes and daily premium blogs you have to subscribe our monthly plan. Than you will get over 200+ premium recipes and over 300+ blogs.
          </p>
        </div>

    
      </div>
    </section>
  );
};

export default QuestionAnswer;
