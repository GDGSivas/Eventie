Date.prototype.customDate = function () {
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

Date.prototype.customTime = function () {
	return (("0" + this.getHours()).slice(-2) + ":" + ("0" + this.getMinutes()).slice(-2));
};
