export var ZUtils = {
  /**
   *
   * @param entitiy Current Entity
   * @returns Returns the Entity Id, single string
   */
  getEntitiyId(entitiy: any): string {
    if (Array.isArray(entitiy.EntityId)) {
      return entitiy.EntityId[0];
    }
    return entitiy.EntityId as string;
  },
};
