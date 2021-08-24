function changePowerTotal(total, ID, status, power) {
  if (status == "on") {
    total += power;
    alert("Generator #" + ID + " is now " + status + ", adding " + power + " MW, for a total of " + total + " MW!");
  } else if (status == "off") {
    total -= power;
    alert("Generator #" + ID + " is now " + status + ", removing " + power + " MW, for a total of " + total + " MW!");
  }
  return total;
}
