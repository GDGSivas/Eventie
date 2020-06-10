Date.prototype.customDate = function() {
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  return (
    this.getDate() + " " + months[this.getMonth()] + " " + this.getUTCFullYear()
  );
};

Date.prototype.customTime = function() {
  return (
    this.getHours() + ":" + (this.getMinutes() == 0 ? "00" : this.getMinutes())
  );
};
