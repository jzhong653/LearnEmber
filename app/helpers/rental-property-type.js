import { helper } from '@ember/component/helper';

const communityPropertyTypes = [
  'Andrew Houses',
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType([propertyType]) {
  if (communityPropertyTypes.includes(propertyType)) {
    return 'Community';
  }

  return 'Standalone';
}

export default helper(rentalPropertyType);
