module.exports = getDate;

function getDate() {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  const date = new Date();

  return date.toLocaleDateString("en-US", options);
}
