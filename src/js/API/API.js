class API {
  // wacht op het inladen van de link voordat de function wordt uitgevoerd
  // url wordt meegegeven via de APP
  async getData(url) {
    let dataToBeReturned = {};
    await fetch(url)
      .then((repsponse) => {
        return repsponse.json();
      })
      .then((data) => {
        dataToBeReturned = data.data;
      });
    // geeft de data terug in de variable dataToBeReturned
    return dataToBeReturned;
  }
}
