import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RitualType, ProcedureStep } from './shaman.interface';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shaman',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './shaman.component.html',
  styleUrl: './shaman.component.scss',
})
export class ShamanComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

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

  ritualTypes: RitualType[] = [
    {
      title: 'Kuzungulug Khamnaary',
      subtitle: '(Kamlanie with a Mirror)',
      description:
        'Every crowned shaman must have a <em>Kuzungu</em> (bronze mirror). With it, one can perform healing rituals. Historically, ancient found bronze mirrors were highly valued for divination and rituals even without full attire.',
      img: '/img/kuzungu.jpeg',
      source: 'Source: Inst: bubenshamana',
    },
    {
      title: 'Khomustap Khamnaary',
      subtitle: '(Kamlanie with a Khomus)',
      description:
        'Common in Erzin and Tes-Khem. Shamans performed rituals artistically, accompanying themselves on a <em>Sheler-Khomus</em> (musical instrument). Typically characteristic of "weaker" shamans.',
      img: '/img/khomus.jpg',
      source: 'Source: https://kntuva.ru/post/1/1047/',
    },
    {
      title: 'Derig-Dungurlug Khamnaary',
      subtitle: '(Kamlanie with Drum & Cloak)',
      description:
        'High-class professional shamans were required to have a full set: a drum (*Dungur*) and ritual cloak (*Derig*). A "true strong shaman" never shamanized without these attributes.',
      img: '/img/dungur.jpg',
      source: 'Source: National Museum of the Republic of Tuva',
    },
    {
      title: 'Dayaktyg Khamnaary',
      subtitle: '(Kamlanie with a Staff)',
      description:
        'According to S.I. Vainshtein, the use of a birch staff called <em>Dayak</em> was characteristic of shamans in the Todzha district.',
      img: '/img/dayak.jpg',
      source: 'Source: National Museum of the Republic of Tuva',
    },
  ];

  procedureSteps: ProcedureStep[] = [
    {
      title: 'Calling the Shaman',
      tuvanTitle: '(Khamny Khooru)',
      description:
        'The patient chooses the shaman. A messenger is sent with a spare horse. If the shaman agrees, he attaches his gear to the saddle and hides the <em>Kuzungu</em> (mirror) in his bosom, allowing no one to touch it.',
    },
    {
      title: 'Lighting the Censer',
      tuvanTitle: '(Chyttyg San Salyry)',
      description:
        'Before any ritual, the shaman must light the <em>San</em> (censer). Burning coals and juniper (*artysh*) are placed on a flat stone. The shaman purifies his drum and boots over the smoke, standing on one leg.',
      hasPhoto: true,
      img: '/img/okurivanie.jpg',
      source: 'Source: Управление Верховного Шамана VK',
    },
    {
      title: 'Beginning of Kamlanie',
      tuvanTitle: '(Khamnap Egelaeri)',
      description:
        'The shaman beats the drum and circles the censer three times (following the sun). He cries like a cuckoo or raven, signaling the start, and begins a silent conversation with his spirit helpers (*Eerens*).',
    },
    {
      title: 'Creating the Image of Disease',
      tuvanTitle: '(Aarygyn Chuuluzun Kolyry)',
      description:
        'The shaman orders the creation of an "image of the disease." He cuts figures of evil spirits from paper and attaches colorful fabric scraps. This <em>Chuulu</em> is attached to a board (*daspan*) to be carried out later.',
    },
    {
      title: 'Making Ogaalga',
      tuvanTitle: '(Ogaalga Kylyry)',
      description:
        'A small square of felt (*Ogaalga*) is prepared with tea leaves and raw meat. This is food to lure the disease spirits out.',
    },
    {
      title: 'Preparation for Removal',
      tuvanTitle: '(Seriir Choogunda)',
      description:
        'Towards the end, the censer and *Ogaalga* are carried out. The carrier circles the patient three times with the smoking censer, luring the spirits with the pleasant smell and the taste of meat.',
    },
    {
      title: 'Holy Water',
      tuvanTitle: '(Arzhaan Kylyry)',
      description:
        'Before the items are removed, the patient washes with "holy water" (*Arzhaan*): water mixed with milk and juniper. Drops must fall onto the disease image (*Chuulu*), not on the ground.',
    },
    {
      title: 'Divination',
      tuvanTitle: '(Teerek Kaary)',
      description: 'The shaman throws his beater (*Orba*) to predict the future:',
      listItems: [
        {
          label: 'Anaa Teerek (Good Omen)',
          text: 'Fur side up. "My shaman, the divination is worth silver and gold!"',
        },
        {
          label: 'Uygu Teerek (Sleep/Bad Omen)',
          text: 'Wood side up. The shaman must drum again to avert danger.',
        },
        {
          label: 'Kyrlan Teerek (Neutral)',
          text: 'Falls on the side. The shaman flips it and throws again.',
        },
      ],
    },
    {
      title: 'Payment',
      tuvanTitle: '(Asty)',
      description:
        'Rich patients gave cattle or a horse with silver harness. Poor patients gave a felt rug, skins, or personal ornaments like rings or buttons.',
    },
    {
      title: 'Offering to Attributes',
      tuvanTitle: '(Khamnyn Et-Sevinge)',
      description:
        "Symbolic gifts for the shaman's tools: a small bag (*eldik*) with a leather cord, needle, thimble, and tobacco. The attributes must be honored.",
    },
  ];
}
