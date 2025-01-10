import React from "react";

const algorithms = [
  "Generative Adversarial Networks (GANs)",
  "Transformers",
  "Reinforcement Learning",
  "Convolutional Neural Networks (CNNs)",
  "Recurrent Neural Networks (RNNs)",
  "Long Short-Term Memory (LSTM)",
];

export function AlgorithmSection() {
  return (
    <section className="algorithms-section py-5 bg-primary text-white">
      <div className="container">
        <h2 className="text-center mb-5">Algorithms We Specialize In</h2>
        <div className="row g-4">
          {algorithms.map((algorithm, index) => (
            <div key={index} className="col-md-4">
              <div className="card bg-light text-dark h-100">
                <div className="card-body">
                  <h5 className="card-title">{algorithm}</h5>
                  <p className="card-text">
                    Leveraging cutting-edge AI algorithms to solve complex
                    business challenges.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
