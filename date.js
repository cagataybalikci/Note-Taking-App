module.exports = getDate;


const date = new Date();

function getDate() {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return date.toLocaleDateString("en-US", options);
}


