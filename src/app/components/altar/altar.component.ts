import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

interface AltarItem {
  id: string;
  name: string;
  description: string;
  img: string;
  x: number;
  y: number;
  width: number;
  rotate: number;
}

@Component({
  selector: 'app-altar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './altar.component.html',
  styleUrls: ['./altar.component.scss'],
})
export class AltarComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

  selectedItem: AltarItem | null = null;

  items: AltarItem[] = [
    {
      id: 'orba',
      name: "Orba (Shaman's Beater)",
      description:
        "The Orba is not just a tool to beat the drum, but a sacred instrument for divination (Toorek). The shaman throws it: if it lands fur-side up, it is a good omen; if wood-side up, danger approaches. It is often covered with the skin of a male goat and adorned with metal rings symbolizing the shaman's ears.",
      img: '/img/orba.png',
      x: 40,
      y: 50,
      width: 180,
      rotate: 15,
    },
    {
      id: 'kuzungu',
      name: 'Kuzungu (Bronze Mirror)',
      description:
        'The Kuzungu is the "eye" of the shaman. Worn on the chest, this bronze mirror repels attacks from evil spirits and reflects the invisible world. A shaman can shamanize without a drum, but never without a mirror. It is the ultimate shield.',
      img: '/img/mirror1.png',
      x: 70,
      y: 55,
      width: 180,
      rotate: 0,
    },
    {
      id: 'bear-claw',
      name: 'Adyg Eeren (Bear Spirit)',
      description:
        'An amulet made of bear claws. The bear (Adyg) is the most powerful ancestor spirit. This Eeren gives the shaman immense physical and spiritual strength to fight dark forces of the Lower World.',
      img: '/img/bear-claws.png',
      x: 15,
      y: 60,
      width: 180,
      rotate: -20,
    },
    {
      id: 'arrow',
      name: "Ydyk O'k (Sacred Arrow)",
      description:
        'The Sacred Arrow attracts good fortune (Keshik) and protects the souls of family members. It is never used as a weapon, but as a magical antenna to catch blessings from the Upper World.',
      img: '/img/arrow.png',
      x: 30,
      y: 20,
      width: 220,
      rotate: 45,
    },
    {
      id: 'tos-karak',
      name: 'Tos-Karak (Nine Eyes)',
      description:
        'A ritual spoon with nine holes used for sprinkling milk or tea to the spirits of nature. The nine holes symbolize the nine heavens. It is used in morning rituals to feed the masters of mountains and rivers.',
      img: '/img/tos-karak.png',
      x: 60,
      y: 30,
      width: 120,
      rotate: 10,
    },
  ];

  ngOnInit() {
    this.title.setTitle('The Semantic Shaman | Explore Tuvan Shamanism');

    this.meta.addTags([
      {
        name: 'description',
        content:
          'Interactive exploration of Tuvan Shamanism based on M.B. Kenin-Lopsan. Discover rituals, costumes, and sacred attributes.',
      },
      {
        name: 'keywords',
        content:
          'Tuva, Shamanism, Shaman, Rituals, Kamlanie, Kenin-Lopsan, Shamanic Costume, Drum, Altar',
      },
      { name: 'author', content: 'Aizana' },
      { name: 'robots', content: 'index, follow' },
    ]);
  }

  selectItem(item: AltarItem) {
    this.selectedItem = item;
  }

  closeModal() {
    this.selectedItem = null;
  }
}
