import {
  isPositiveInteger,
  divideBy,
  isInRange,
  isOverlapped,
  winningCount,
  isBounusNumber,
} from './utils';
import { CLASS_NAME, SELECTOR, MONEY, ERROR_MESSAGE } from './constants';
import Lotto from './Lotto';
import {
  generatePaymentSection,
  generatePurchasedSection,
  generateWinningNumberSection,
  generateResultCheckingSection,
  generateModal,
} from './templates';
import {
  getElement,
  getElements,
  bindEventListener,
  render,
  initInput,
  disableElement,
  toggleClassName,
} from './dom';

export default class LottoApp {
  constructor(app) {
    this.$app = getElement(app);
    render(this.$app, generatePaymentSection());

    this.lottoList = [];
    this.bindEvent();
  }

  bindEvent() {
    bindEventListener({
      appElement: this.$app,
      type: 'click',
      selector: SELECTOR.PAYMENT_BUTTON,
      callback: this.onSubmitPayment.bind(this),
    });

    bindEventListener({
      appElement: this.$app,
      type: 'click',
      selector: SELECTOR.LOTTO_LIST_TOGGLE_BUTTON,
      callback: this.onClickToggleButton.bind(this),
    });

    bindEventListener({
      appElement: this.$app,
      type: 'click',
      selector: '#modal-close-button',
      callback: this.onClickModalClose.bind(this),
    });

    bindEventListener({
      appElement: this.$app,
      type: 'click',
      selector: '#result-checking-section',
      callback: this.onClickResultButton.bind(this),
    });

    window.addEventListener('click', (e) => {
      if (e.target === document.querySelector('.modal-background')) {
        document.querySelector('.modal-background').classList.remove('show');
      }
    });
  }

  onSubmitPayment() {
    const $paymentInput = getElement(SELECTOR.PAYMENT_INPUT);
    const payment = Number($paymentInput.value);

    try {
      if (!isPositiveInteger(payment)) {
        throw new Error(ERROR_MESSAGE.MONEY_OUT_OF_RANGE);
      }
      if (!divideBy(payment, MONEY.STANDARD)) {
        throw new Error(ERROR_MESSAGE.MONEY_OUT_OF_STANDARD);
      }

      this.disablePayment();
      this.setPurchasedLottoList(payment / MONEY.STANDARD);
      this.renderPurchasedSection();
    } catch ({ message }) {
      alert(message);
      initInput($paymentInput);
    }
  }

  disablePayment() {
    toggleClassName(getElement(SELECTOR.PAYMENT_BUTTON), CLASS_NAME.DISABLED);

    disableElement(getElement(SELECTOR.PAYMENT_BUTTON));
    disableElement(getElement(SELECTOR.PAYMENT_INPUT));
  }

  renderPurchasedSection() {
    render(this.$app, generatePurchasedSection(this.lottoList));
    render(this.$app, generateWinningNumberSection());
    render(this.$app, generateResultCheckingSection());
  }

  setPurchasedLottoList(count) {
    for (let i = 0; i < count; i++) {
      const lotto = new Lotto();
      lotto.setLotto();
      this.lottoList.push(lotto.getLotto());
    }
  }

  onClickToggleButton() {
    toggleClassName(
      getElement(SELECTOR.LOTTO_LIST_TOGGLE_BUTTON),
      CLASS_NAME.TOGGLE_SWITCH
    );

    toggleClassName(
      getElement(SELECTOR.LOTTO_LIST),
      CLASS_NAME.DIRECTION_COLUMN
    );

    getElements(SELECTOR.LOTTO_NUMBER).forEach((element) => {
      element.classList.toggle(CLASS_NAME.INVISIBLE);
    });
  }

  onClickResultButton() {
    const $winningNumberInputs = getElements('.winning-number-input');
    const $bonusNumberInput = getElement('#bonus-number-input');
    const winningNumber = [];
    const bonusNumber = Number($bonusNumberInput.value);

    try {
      $winningNumberInputs.forEach((input) => {
        if (
          !isInRange(1, 45, Number(input.value)) ||
          !isInRange(1, 45, bonusNumber)
        ) {
          throw new Error(
            '지난주 당첨 번호또는 보너스 번호를 잘못 입력하셨습니다. 1 ~ 45 사이의 숫자를 입력해주세요'
          );
        }
        winningNumber.push(Number(input.value));
      });

      if (isOverlapped(winningNumber, bonusNumber)) {
        throw new Error(
          '지난주 당첨 번호와 보너스 번호를 잘못 입력하셨습니다. 서로 다른 숫자를 입력해주세요'
        );
      }

      const result = [0, 0, 0, 0, 0];
      const pay = [5000, 50000, 1500000, 30000000, 2000000000];
      this.lottoList.forEach((lotto) => {
        const count = winningCount(lotto, winningNumber);
        const bonusCount = isBounusNumber(lotto, bonusNumber);
        if (count === 6) {
          result[4] += 1;
        }
        if (count + bonusCount === 6) {
          result[3] += 1;
        }
        if (count + bonusCount > 2 && count + bonusCount < 6) {
          result[count + bonusCount - 3] += 1;
        }
      });
      let totalMoney = 0;
      result.forEach((count, index) => {
        totalMoney += count * pay[index];
      });
      render(
        this.$app,
        generateModal(
          result,
          Math.floor((totalMoney * 100) / (this.lottoList.length * 5000))
        )
      );
      $winningNumberInputs.forEach((element) => disableElement(element));
      disableElement($bonusNumberInput);
      getElement('.modal-background').classList.add('show');
    } catch ({ message }) {
      alert(message);
      $winningNumberInputs.forEach((input) => {
        initInput(input);
      });
      initInput($bonusNumberInput);
      $winningNumberInputs[0].focus();
    }
  }

  onClickModalClose() {
    getElement('.modal-background').classList.remove('show');
  }
}
