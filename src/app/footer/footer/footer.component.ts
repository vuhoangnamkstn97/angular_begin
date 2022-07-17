import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  baseDirectoryImages = "../assets/images/"
  mediaItems = [
    {
      link: "https://discord.com/invite/6y2DFXghKA",
      icon: "discord.png"
    },
    {
      link: "https://www.instagram.com/kyoto.angels/",
      icon: "instagram.png"
    },
    {
      link: "https://opensea.io/collection/kyotoangels",
      icon: "opensea.png"
    },
    {
      link: "https://polygonscan.com/token/0x67ec850b2cb4f9a171487cafc48e3f8d964e12c6",
      icon: "polygon.png"
    },
    {
      link: "https://twitter.com/angels_kyoto",
      icon: "twitter.png"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
