// הגדרות החיבור של הטלפון ל-OneDrive.
// clientId מגיע מרישום האפליקציה באתר של מיקרוסופט (ראו "מדריך התקנה לטלפון.md").
window.PM_CONFIG = {
  clientId: '',
  authority: 'https://login.microsoftonline.com/organizations',
  // תיקיית ההתחלה לבחירת תיק, ומיקום רשימת הנכסים, יחסית לשורש ה-OneDrive
  casesStart: 'MW שמאות מקרקעין',
  indexPath: 'מדידות תשריטים/נכסים.json',
};
