import PreviewLetter from "./PreviewLetter.js";
import PreviewCoupon from "./PreviewCoupon.js";
import PreviewCapsule from "./PreviewCapsule.js";
import PreviewGift from "./PreviewGift.js";

class PreviewEngine {

    render(note) {

        switch (note.type) {

            case "coupon":
                return new PreviewCoupon().render(note);

            case "capsule":
                return new PreviewCapsule().render(note);

            case "gift":
                return new PreviewGift().render(note);

            default:
                return new PreviewLetter().render(note);

        }

    }

}

export default new PreviewEngine();