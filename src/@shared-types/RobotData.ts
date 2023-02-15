type CompetitionItem = {
    name : string,
    url : string
}

type CompetitionTypes = 'FRC' | 'SeaPerch' | 'Other'

export type RobotData = {

    _id : string
    name : string,
    biography : string,
    
    type : CompetitionTypes
    season : string,
    
    competitions : {[key : string] : CompetitionItem},

    // TODO
    // Media items should also have a 'type' defining if they're an 'image', 'video', or '3dObject'
    media : {[key : string] : string},
    
    last_modified : string,
    modified_by : string,

}