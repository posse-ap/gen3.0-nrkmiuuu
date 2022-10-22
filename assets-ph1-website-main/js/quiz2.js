'use strict';

/**
   * @typedef QUIZ
   * @property {number} correctNumber 問題番号
   * @property {string | undefined} note ノート
   * @property {string} question 問題文
   * @property {string[]} answers 回答の配列
   */

/**
 * @description 問題と回答の定数
 * @type {QUIZ[]}
 */
const ALL_QUIZ = [
  {
    question: '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
    answers: ['約28万人', '約79万人', '約183万人'],
    correctNumber: 1,
    note: '経済産業省 2019年3月 － IT 人材需給に関する調査'
  },
  {
    question: '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
    answers: ['INTECH', 'BIZZTECH', 'X-TECH'],
    correctNumber: 2,
  },
  {
    question: 'IoTとは何の略でしょう？',
    answers: ['Internet of Things', 'Integrate into Technology', 'Information on Tool'],
    correctNumber: 0,
  },
  {
    question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
    answers: ['Society 5.0', 'CyPhy', 'SDGs'],
    correctNumber: 0,
    note: 'Society5.0 - 科学技術政策 - 内閣府'
  },
  {
    question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
    answers: ['Web3.0', 'NFT', 'メタバース'],
    correctNumber: 0,
  },
  {
    question: '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
    answers: ['約2倍', '約5倍', '約11倍'],
    correctNumber: 1,
    note: 'Accenture Technology Vision 2021'
  }
];

/**
 * @description クイズコンテナーの取得
 * @type {HTMLElement}
 */
const quizContainer = document.getElementById('js-quizContainer');

/**
 * @description クイズ１つ１つのHTMLを生成するための関数
 * @param quizItem { QUIZ }
 * @param questionNumber { number }
 * @returns {string}
 */
const createQuizHtml = (quizItem, questionNumber) => {

  /**
   * @description 回答の生成
   * @type {string}
   */
  const answersHtml = quizItem.answers.map((answer, answerIndex) => `<li class="p-quiz-box__answer__item">
        <button class="p-quiz-box__answer__button js-answer" data-answer="${answerIndex}">
          ${answer}<i class="u-icon__arrow"></i>
        </button>
      </li>`
  ).join('');

  // (answer, answerIndex) 仮引数 ただの箱  
  
  // $ jsだということをしめす

  // mapは配列の各要素に対して好きな操作をすることができる、変更を加えたま
  // map() メソッドは、与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成します。
// joinは真空状態 コンマをなくす役割

  // 引用テキストの生成
  const noteHtml = quizItem.note ? `<cite class="p-quiz-box__note">
      <i class="u-icon__note"></i>${quizItem.note}
    </cite>` : '';

    // ? 条件演算子または疑問符演算子 JavaScriptの最も強力な機能の1つ。
    // ？演算子は条件ステートメントで使用され、：と組み合わせるとif...elseのコンパクトな代替として機能できる
    // ?を使った時点でtrue

  return `<section class="p-quiz-box js-quiz" data-quiz="${questionNumber}">
      <div class="p-quiz-box__question">
        <h2 class="p-quiz-box__question__title">
          <span class="p-quiz-box__label">Q${questionNumber + 1}</span>
          <span
            class="p-quiz-box__question__title__text">${quizItem.question}</span>
        </h2>
        <figure class="p-quiz-box__question__image">
          <img src="../assets/img/quiz/img-quiz0${questionNumber + 1}.png" alt="">
        </figure>
      </div>
      <div class="p-quiz-box__answer">
        <span class="p-quiz-box__label p-quiz-box__label--accent">A</span>
        <ul class="p-quiz-box__answer__list">
          ${answersHtml}
        </ul>
        <div class="p-quiz-box__answer__correct js-answerBox">
          <p class="p-quiz-box__answer__correct__title js-answerTitle"></p>
          <p class="p-quiz-box__answer__correct__content">
            <span class="p-quiz-box__answer__correct__content__label">A</span>
            <span class="js-answerText"></span>
          </p>
        </div>
      </div>
      ${noteHtml}
    </section>`
}