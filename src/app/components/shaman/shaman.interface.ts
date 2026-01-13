export interface RitualType {
    title: string;
    subtitle: string;
    description: string;
    img: string;
    source: string;
  }
  
 export interface ProcedureStep {
    title: string;
    tuvanTitle: string;
    description: string;
    hasPhoto?: boolean; 
    img?: string;
    source?: string;
    listItems?: { label: string; text: string }[]; 
  }