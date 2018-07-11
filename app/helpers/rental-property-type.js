import { helper } from '@ember/component/helper';

const communityPropertyTypes = [
  'Kirby Houses',
  'Andrew Houses'
];

export function rentalPropertyType([propertyType]) {
  if (communityPropertyTypes.includes(propertyType)) {
    return 'Community';
  }

  return 'Standalone';
}

export default helper(rentalPropertyType);
