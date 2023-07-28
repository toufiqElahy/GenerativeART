// <copyright file="Layer.cs" company="Tedeschi">
// Copyright (c) Tedeschi. All rights reserved.
// </copyright>

namespace GenerativeNFT.Model
{
    using System.Collections.Generic;
    using GenerativeNFT.Mechanism;

    public class Layer
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public List<Element> Elements { get; set; }

        public WeightedRandomizer<int> Randomizer { get; set; }
    }
}
