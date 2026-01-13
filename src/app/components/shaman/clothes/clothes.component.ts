import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

interface CloakAttribute {
  title: string;
  subtitle: string;
  description: string;
}

interface HeaddressDetail {
  title: string;
  tuvan: string;
  description: string;
}

interface DrumDetail {
  title: string;
  tuvan?: string; 
  description: string;
}

@Component({
  selector: 'app-clothes',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './clothes.component.html',
  styleUrl: './clothes.component.scss'
})
export class ClothesComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('The Semantic Shaman | Explore Tuvan Shamanism');

    this.meta.addTags([
      { name: 'description', content: 'Interactive exploration of Tuvan Shamanism based on M.B. Kenin-Lopsan. Discover rituals, costumes, and sacred attributes.' },
      { name: 'keywords', content: 'Tuva, Shamanism, Shaman, Rituals, Kamlanie, Kenin-Lopsan, Shamanic Costume, Drum, Altar' },
      { name: 'author', content: 'Aizana' },
      { name: 'robots', content: 'index, follow' }
    ]);
  }
  
  cloakAttributesLeft: CloakAttribute[] = [
    {
      title: 'Iyi Kara Kuskun',
      subtitle: 'Two Black Ravens',
      description: 'Wooden ravens on shoulders. They act as scouts, flying ahead to find lost souls.'
    },
    {
      title: 'Aldy Chuuru',
      subtitle: 'Lynx Fur',
      description: 'A strip of lynx leg fur sewn along the sleeve seams. Can be replaced by wolf or fox.'
    },
    {
      title: 'Manchak',
      subtitle: 'Fringe Bundle',
      description: '156 leather cords. Vainshtein wrote: "These are the wings allowing the shaman to fly."'
    }
  ];

  cloakAttributesRight: CloakAttribute[] = [
    {
      title: 'Snakes (Chylan)',
      subtitle: 'Cosmic Guides',
      description: '<strong>Shoulder Snakes:</strong> 18 fabric snakes.<br><strong>Shooting Snakes:</strong> Metal chains with arrowheads.<br><strong>Striped Snakes:</strong> 9 snakes with pouches.'
    },
    {
      title: 'Bells & Whistles',
      subtitle: 'Konguraalar',
      description: '15 metal tubes and bells on the back. Their sound creates a hypnotic rhythm during movement.'
    },
    {
      title: 'Richness of Elbow',
      subtitle: 'Shenek Bailaa',
      description: 'Brocade pouch and 9 leather straps on the left sleeve with three white ribbons.'
    }
  ];

  headdressDetails: HeaddressDetail[] = [
    { title: 'Copper Face', tuvan: '(Khola Khaay, Khola Karak)', description: 'A copper nose and copper eyes are sewn onto the front. Surrounded by red fabric circles, they give the headdress the appearance of a mythical creature.' },
    { title: 'Copper Horns', tuvan: '(Ches Myiys)', description: 'Stylized copper horns (~15cm) forged by a blacksmith. They protect against evil spirits. Historically, horned headdresses have a deep tradition dating back to the Iron Age.' },
    { title: 'Eagle Feathers', tuvan: '(Sannash)', description: 'The main decoration consists of 40 large and 20 small eagle feathers. They represent the birds—spirit helpers. "The eagle spirit helps the shaman to fly."' },
    { title: 'Black Wings', tuvan: '(Suuk-Kara)', description: 'Two long black feathers at the very front. They act as "fins" or rudders, helping the shaman overcome air resistance during his cosmic flight.' },
    { title: 'The Fringe', tuvan: '(Borttun Khanazy)', description: 'The "wall of the hat" covers the eyes. Traditionally decorated with maral (deer) teeth or beads and checkerboard embroidery. It hides the shaman\'s human gaze from the spirits.' }
  ];

  drumDetailsLeft: DrumDetail[] = [
    { title: 'The Frame', tuvan: '(Rim)', description: 'Made of larch wood. Before cutting the tree, a ritual is performed to feed the forest spirit.' },
    { title: 'The Skin', tuvan: '(Dungurnun Algyzy)', description: 'Depending on the region, the skin of a mountain goat (*te*), maral deer, or roe deer is used.' },
    { title: 'The Handle', tuvan: '(Tudazy)', description: 'The vertical bar inside. It often depicts the monstrous bird Khaan-Khereti or the shaman himself.' },
    { title: 'The Crossbar', tuvan: '(Sheezhep)', description: 'A horizontal willow stick holding bronze bells and arrowheads.' }
  ];

  drumDetailsRight: DrumDetail[] = [
    { title: 'Material', description: 'Made from elk horn (Eastern Tuva) or pine/juniper root (Western Tuva). The beater is a sacred tool for divination.' },
    { title: 'Front Side', tuvan: '(Orbanyn Arny)', description: 'The striking side is covered with the skin of a bear or mountain goat.' },
    { title: 'Back Side', tuvan: '(Orbanyn Arty)', description: 'Decorated with carvings (often a pine tree with a bird) and metal rings. The rings jingle, adding another layer of sound.' },
    { title: 'Divination Tool', description: 'The beater is used to predict the future. When thrown, if it lands fur-up, it is good luck. Wood-up means danger.' }
  ];

}
