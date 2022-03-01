const Greetings = ({ lang, children }) => {
  const greetingContent = () => {
    switch (lang) {
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      case 'es':
        return 'Hola';
      default:
        return 'Hello';
    }
  };

  return (
    <div>
      <p>
        {greetingContent()} {children}
      </p>
    </div>
  );
};

export default Greetings;
