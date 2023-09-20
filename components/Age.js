const Age = ({ birthDate }) => {
  function calculateAge(birthDate) {
    const today = new Date();
    const birthDateFormat = new Date(birthDate);

    let age = today.getFullYear() - birthDateFormat.getFullYear();
    const monthDiff = today.getMonth() - birthDateFormat.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDateFormat.getDate())
    ) {
      age--;
    }

    return age;
  }

  return calculateAge(birthDate);
};

export default Age;
