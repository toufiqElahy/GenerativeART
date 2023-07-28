// <copyright file="ImageEventArgs.cs" company="Tedeschi">
// Copyright (c) Tedeschi. All rights reserved.
// </copyright>

namespace GenerativeNFT.Event
{
    using System;

    public class ImageEventArgs : EventArgs
    {
        public int CollectionItemId { get; set; }

        public int CollectionItemName { get; set; }
    }
}
