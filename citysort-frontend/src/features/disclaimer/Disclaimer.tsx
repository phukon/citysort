
const Disclaimer = () => {
  return (
    <div className="md:px-80 md:py-10 px-10 py-10">
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 md:py-4 py-4 md:px-20 px-4 rounded-md shadow-md">
        <h3 className="text-lg font-bold mb-2">Disclaimer</h3>
        <p className="text-sm">
          The data presented in this project has been crowdsourced, and while
          efforts have been made to ensure accuracy and reliability, it is
          important to acknowledge that the information provided is based on
          individual opinions and submissions.
          <br/> <br/> We do not guarantee the absolute
          accuracy, completeness, or currentness of the data presented. Users
          are advised to use this information as a reference and exercise their
          judgment when relying on these ratings. The project creators do not
          take responsibility for any decisions made based on the information
          provided in this compilation.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
