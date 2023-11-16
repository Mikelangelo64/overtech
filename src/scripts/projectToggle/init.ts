import vevet from '../config/vevet';
import { useOutsideClick } from '../popup/utils';

const projectToggle = () => {
  const elements: NodeListOf<HTMLElement> =
    document.querySelectorAll('.dropdown.desktop');

  if (elements.length === 0) {
    return;
  }

  elements.forEach((element) => {
    if (vevet.isMobile) {
      element.addEventListener('click', () => {
        element.classList.add('viewed');
      });

      useOutsideClick(element, () => {
        element.classList.remove('viewed');
      });

      return;
    }

    element.addEventListener('mouseenter', () => {
      element.classList.add('viewed');
    });

    element.addEventListener('mouseleave', () => {
      element.classList.remove('viewed');
    });
  });
};

export default projectToggle;
