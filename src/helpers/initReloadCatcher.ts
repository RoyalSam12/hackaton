export const initReloadCatcher = () => {
  if (sessionStorage.getItem('firstVisit') === 'true') {
    alert('RELOAD!');
    sessionStorage.removeItem('firstVisit');
  }

  sessionStorage.setItem('firstVisit', 'true');
};
