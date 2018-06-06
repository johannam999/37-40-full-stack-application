export default function autoBind(classComponent) {
  const classMethod = Object.getOwnPropertyNames(classComponent.prototype);
  classMethod.forEach((method) => {
    if (method.startsWith('handle')) {
      this[method] = this[method].bind(this);
    }
  });
}

// export const validateParcel = (payload) => {
//   if (!payload._id) {
//     throw new Error('VALIDATION ERROR: parcel must have an id');
//   }

//   if (!payload.firstName) {
//     throw new Error('VALIDATION ERROR: parcel must have a title');
//   }
//   if (!payload.lastName) {
//     throw new Error('VALIDATION ERROR: parcel must have a title');
//   }
// };
