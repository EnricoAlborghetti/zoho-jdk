export class ZSDK {
  isContextReady: boolean;
  HelperContext: {};
  isDevMode: boolean;
  getContext: () => {
    Model: {};
    Event: {};
  };
  OnLoad: (params: any) => void;
  OnUnLoad: (params: any) => void;
  OnContextUpdate: (b: any) => void;
}

export namespace ZOHO {
  export interface ZohoEntity {
    Entity: string;
    EntityId: string | string[];
  }

  export interface GetRecordParams {
    Entity: string;
    RecordID: string;
  }
  export interface GetRelatedParams extends GetRecordParams {
    RelatedList: string;
  }
  export interface GetFileParams {
    id: string;
  }
  export interface Response {
    datparams: any[];
  }
  export interface InvokeParams {
    method: string;
    url: string;
  }

  export interface GetRecordResponse extends Response {}
  export interface GetRelatedRecordParams extends Response {}
  export interface InvokeResponse {
    details: { statusMessage: { datparams: string } };
  }

  namespace embeddedApp {
    function on(event: string, action: (entity: ZohoEntity) => void): void;
    function init(): void;
  }
  namespace CRM {
    namespace ACTION {
      function setConfig(params: any): any;
      function enableAccountAccess(params: any): any;
    }
    namespace FUNCTIONS {
      function execute(params: any, d: any): any;
    }
    namespace CONFIG {
      function getOrgInfo(params: any): any;
      function getCurrentUser(): any;
      function GetCurrentEnvironment(): any;
    }
    namespace META {
      function getFields(params: any): any;
      function getModules(): any;
      function getAssignmentRules(params: any): any;
      function getLayouts(params: any): any;
      function getRelatedList(params: any): any;
      function getCustomViews(params: any): any;
    }
    namespace API {
      function addNotes(params: any): any;
      function addNotesAttachment(params: any): any;
      function insertRecord(params: any): any;
      function upsertRecord(params: any): any;
      function getRecord(params: GetRecordParams): GetRecordResponse;
      function getBluePrint(params: any): any;
      function updateBluePrint(params: any): any;
      function uploadFile(params: any): any;
      function getFile(params: GetFileParams): Promise<Blob>;
      function getAllRecords(params: any): any;
      function updateRecord(params: any): any;
      function deleteRecord(params: any): any;
      function searchRecord(params: any): any;
      function getAllActions(params: any): any;
      function getApprovalRecords(params: any): any;
      function getApprovalById(params: any): any;
      function getApprovalsHistory(): any;
      function approveRecord(params: any): any;
      function getAllUsers(params: any): any;
      function getUser(params: any): any;
      function getRelatedRecords(params: GetRelatedParams): GetRelatedRecordParams;
      function updateRelatedRecords(params: any): any;
      function delinkRelatedRecord(params: any): any;
      function attachFile(params: any): any;
      function getAllProfiles(params: any): any;
      function getProfile(params: any): any;
      function updateProfile(params: any): any;
      function getOrgVariable(params: any): any;
    }
    namespace UI {
      function Resize(params: any): any;
      namespace Dialer {
        function maximize(): any;
        function minimize(): any;
        function notify(): any;
      }
      namespace Record {
        function open(params: any): any;
        function edit(params: any): any;
        function create(params: any): any;
        function populate(params: any): any;
      }
      namespace Popup {
        function close(): any;
        function closeReload(): any;
      }
      namespace Widget {
        export function open_1(params: any): any;
        export { open_1 as open };
      }
    }
    namespace HTTP {
      export function get(params: any): any;
      export function post(params: any): any;
      export function put(params: any): any;
      export function patch(params: any): any;
      export function _delete(params: any): any;
      export { _delete as delete };
    }
    namespace CONNECTOR {
      function invokeAPI(params: any, d: any): any;
      function authorize(params: any): any;
    }
    namespace CONNECTION {
      function invoke(connection: string, params: InvokeParams): InvokeResponse;
    }
    namespace WIZARD {
      export function post_1(params: any): any;
      export { post_1 as post };
    }
    namespace BLUEPRINT {
      function proceed(): any;
    }
  }
}
export var ZSDKUtil: any;
export var ZSDKMessageManager: any;
export var ZSDKEventManager: any;
