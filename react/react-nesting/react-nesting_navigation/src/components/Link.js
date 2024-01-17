export default function Link({href, children}) {
  return (
    <a className="navigation__link" href={href}>
      {children}
    </a>
  );
}

// export default function Link(href) {
//   const text = href.slice(1);
//   const capitalizedText = text[0].toUpperCase + text.slice(1);
//   return (
//     <a className="navigation__link" href={href}>
//       {capitalizedText}
//     </a>
//   );
// }
