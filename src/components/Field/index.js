import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setFieldValue } from '../../actions';

import './styles.scss';

const Field = ({ type, placeholder, name }) => {
  const dispatch = useDispatch();
  // si on prépare l'affichage d'un champ dont le nom (name) est
  // emailValue, on veut chercher dans le state la valeur de la propriété emailValue
  //
  // On peut accéder dynamiquement à une propriété d'un objet avec la syntaxe []
  // par exemple :
  // const people = {
  //  name:'julien',
  //  address: '1 rue de la mairie',
  // };
  // const propName = 'addres';
  // console.log(people[propName]); -> affiche '1 rue de la mairie'
  // équivalent à faire people.address !
  const fieldValue = useSelector((state) => state[name]);
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="field"
      value={fieldValue}
      onChange={
              (event) => {
                dispatch(setFieldValue(name, event.target.value));
              }
            }
    />
  );
};
Field.defaultProps = {
  type: 'text',
  placeholder: '',
};

Field.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Field;
