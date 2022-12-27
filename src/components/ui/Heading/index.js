function Heading({ level, children }) {
  const HeadingComponent = level;

  const fontSize = (() => {
    switch (level) {
      case 'h1':
        return 'text-4xl';
      case 'h2':
        return 'text-3xl';
      case 'h3':
        return 'text-2xl';
      case 'h4':
        return 'text-xl';
      case 'h5':
        return 'text-lg';
      case 'h6':
        return 'text-base';
      default:
        return 'text-base';
    }
  })();

  return (
    <HeadingComponent className={fontSize + ' border-b border-neutral-400'}>
      {children}
    </HeadingComponent>
  );
}

export default Heading;
