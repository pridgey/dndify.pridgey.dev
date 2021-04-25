import React, { useState, useEffect } from "react";

type EditorProps = {
  OnChange: (newText: string) => void;
  Value: string;
};

export const Editor = ({ OnChange, Value }: EditorProps) => {
  const [editorValue, setEditorValue] = useState(Value);

  useEffect(() => {
    setEditorValue(Value);
  }, [Value]);

  return (
    <textarea
      value={editorValue}
      onChange={(e) => {
        setEditorValue(e.currentTarget.value);
        OnChange(e.currentTarget.value);
      }}
      placeholder={`# Burried Hollow  
      > "Better a half day's wage for a full day's work in the 'Hollow than to spend yer days within the gallow"
      
      ## The "Rough Township"  
      Burried Hollow is an eclectic mishmash of cultures, races and poverty. It is located on the southern tip of Varhem Island and has a population of around 40,000 full time and transient residents.
      
      ## Notable Places
      
      ### Veritas Flower Fields  
      A 35 mile stretch of wildflowers through an otherwise flat expanse of plains. It is considered by many to be a beautiful, if not surreal place. When standing in the middle of the field, on a clear, windless, day one might swear they can transcend planes.  
      
      Veritas Flower Fields is a known home to many faeries and various other fey. It is considered dangerous to linger in the fields alone.
      
      ## People of Note
      
      ### Japhas Rutmuk
      A portly Leonin in fine silken clothes. He is the head of the trade guilds within Burried Hollow. A job he takes incredibly seriously as he considers trade to be the one thing keeping Burried Hollow from descending into utter criminal chaos.
      
      ### Bidu Panzer
      A hobgoblin Paladin of **Oghma** who loves to help the needy and hates harsh language. While not really publicly known, and while many believe the city is run by criminal syndicates, Bidu is the true ruler of Burried Hollow.
      
      ## History
      Burried Hollow, initially named **Hamlet**, was founded in  563 of the Varhemnan Calendar (VHC). Initially it was a warehouse town with a major port for the island. At that point in time, there were only a few settlements on the island and none of them had grown particularly large. So Burried Hollow was the largest establishment at the time. Though the majority of space was taken up by warehouses stocking trade goods, livestock and weapons.
      
      With the arrival of colonists from the kingdom of **Heilige Mars**, Buried Hollow slowly became a place for runaways and degenerates. It’s image changed from a place of commerce and trade, to one of gambling and thievery.
      
      ![Image](https://i.imgur.com/wgDvhHM.png)
      
      ## City Information
      | | |
      | ---: | :--- |
      | **Founded** | 563 VHC |
      | **Founding Figure** | Unknown |
      | **Current Leader** | Bidu Panzer |
      | | |
      | **Kingdom** | Self-Governing Varhem |
      | | |
      | **Plane** | Material Plane
      | **Continent** | Island of Varhem |
      | **Area** | 225 Sq. Miles |
      | | |
      | **Population** | 44,159 |
      | **Population Breakdown** | 28% Human |
      | | 20% Elf |
      | | 18% Dwarf |
      | | 15% Gnome |
      | | 09% Orc |
      | | 05% Tiefling |
      | | 05% Dragonborn |
      | | |
      | **Prominent Gods** | Mixed |`}
    ></textarea>
  );
};
