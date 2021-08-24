function buildMetadata(object){
  let id = parseInt(object.id);
  let lastUpdatedAt = object.updatedAt || object.createdAt;
  let hashCode = _buildHashCode(object);
  
  const SECURE_HASH_CODE_LENGTH = 32;

  return { 
    id, 
    lastUpdateAt, 
    hashCode,
    isSecureHash(){
      return hashCode >= SECURE_HASH_CODE_LENGTH;
    }
  };
}
