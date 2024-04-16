class GiftCardRecipientForm extends HTMLElement {
  constructor() {
    super();

    this.toggleCheckbox = this.querySelector('[name="properties[__shopify_send_gift_card_to_recipient]"]');
    this.giftCardRecipientsFields = this.querySelectorAll('[name*="Recipient"]');
    this.giftCardRecipientFieldContainer = this.querySelector('.gift-card--recipient-form-wrapper');
  }

  connectedCallback() {
    this.init();
  }

  init() {
    this.toggleCheckbox.addEventListener('change', this.toggleFormVisibility.bind(this));
    document.addEventListener('cart:added', this.resetRecipientForm.bind(this));
  }

  toggleFormVisibility() {
    // TO DO - Replace this with animations engine call
    this.giftCardRecipientsFields.forEach(input => input.disabled ? input.disabled = false : input.disabled = true);
    this.giftCardRecipientFieldContainer.classList.toggle('hide');
  }

  resetRecipientForm() {
    if (this.toggleCheckbox.checked) {
      this.toggleCheckbox.checked = false;
      this.clearInputFields();
    }
  }

  clearInputFields() {
    this.giftCardRecipientsFields.forEach(input => input.value = '');
  }
}

customElements.define('gift-card-recipient-form', GiftCardRecipientForm);