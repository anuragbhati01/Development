const express = require("express");
const router = express.Router({mergeParams : true}); // with this we can access the parent route info like :id in /listings/:id/reviews in child which is /reviewsId
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema  } = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);

  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else next(error);
};

// Reviews Routes
// Post Review Route
router.post(
  "/",
  validateReview,
  wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save(); // when we update existing document then, we have to save again that document. Therefore we saved listing here.
    console.log("Review saved");
    res.redirect(`/listings/${listing._id}`);
  })
);

// Delete Review Route
router.delete("/:reviewId", wrapAsync(async (req, res) => {
  let {id, reviewId} = req.params;

  await Listing.findByIdAndUpdate(id, {$pull: {reviews : reviewId}});
  await Review.findByIdAndDelete(reviewId);

  res.redirect(`/listings/${id}`)
}));

module.exports = router;