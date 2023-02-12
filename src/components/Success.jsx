import iconComplete from "../assets/images/icon-complete.svg"

const Success = () => {
    return (
        <div class="form success">
            <img src={iconComplete} alt="icon complete" class="success__image" />
            <h3 class="success__title">Thank you!</h3>
            <p class="success__text">We've added your card details</p>
            <input type="submit" class="form__submit" value="Continue" />
        </div>
    )
}

export default Success