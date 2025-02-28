import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsFeaturesCard extends Struct.ComponentSchema {
  collectionName: 'components_components_features_cards';
  info: {
    description: '';
    displayName: 'Features Card';
  };
  attributes: {
    heading: Schema.Attribute.String;
    imagesfeature: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    subHeading: Schema.Attribute.String;
  };
}

export interface ComponentsFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_components_features_sections';
  info: {
    description: '';
    displayName: 'Features Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    imagesfeature: Schema.Attribute.Media<'images'>;
    subHeading: Schema.Attribute.String;
  };
}

export interface ComponentsFooternAvigationLinks
  extends Struct.ComponentSchema {
  collectionName: 'components_components_footern_avigation_links';
  info: {
    displayName: 'footern_avigation_links';
  };
  attributes: {
    links: Schema.Attribute.Component<'components.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsForm extends Struct.ComponentSchema {
  collectionName: 'components_components_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface ComponentsHero extends Struct.ComponentSchema {
  collectionName: 'components_components_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    btn: Schema.Attribute.Component<'components.link', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subHeading: Schema.Attribute.String;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsReference extends Struct.ComponentSchema {
  collectionName: 'components_components_references';
  info: {
    description: '';
    displayName: 'reference';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

export interface FormcompFieldOption extends Struct.ComponentSchema {
  collectionName: 'components_formcomp_field_options';
  info: {
    displayName: 'FieldOption';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface LayoutFeaturesCards extends Struct.ComponentSchema {
  collectionName: 'components_layout_features_cards';
  info: {
    description: '';
    displayName: 'Features Cards';
  };
  attributes: {
    featurescard: Schema.Attribute.Component<'components.features-card', true>;
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
  };
}

export interface LayoutFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_features_sections';
  info: {
    description: '';
    displayName: 'Features Section';
  };
  attributes: {
    features: Schema.Attribute.Component<'components.features-section', true>;
    header: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'footer';
  };
  attributes: {
    copyright: Schema.Attribute.String;
    copyright_description: Schema.Attribute.Text;
    descriptionlogo: Schema.Attribute.Text;
    Foot_nav_link: Schema.Attribute.Component<
      'components.footern-avigation-links',
      true
    >;
    logo: Schema.Attribute.Component<'components.link', false>;
    socialLink: Schema.Attribute.Component<'components.link', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    description: '';
    displayName: 'Header';
  };
  attributes: {
    headerlinks: Schema.Attribute.Component<'components.link', true>;
    logo: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
  };
  attributes: {
    heros: Schema.Attribute.Component<'components.hero', true>;
    name: Schema.Attribute.String;
  };
}

export interface LayoutReferences extends Struct.ComponentSchema {
  collectionName: 'components_layout_references';
  info: {
    description: '';
    displayName: 'references';
  };
  attributes: {
    reference: Schema.Attribute.Component<'components.reference', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.features-card': ComponentsFeaturesCard;
      'components.features-section': ComponentsFeaturesSection;
      'components.footern-avigation-links': ComponentsFooternAvigationLinks;
      'components.form': ComponentsForm;
      'components.hero': ComponentsHero;
      'components.link': ComponentsLink;
      'components.reference': ComponentsReference;
      'formcomp.field-option': FormcompFieldOption;
      'layout.features-cards': LayoutFeaturesCards;
      'layout.features-section': LayoutFeaturesSection;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.hero-section': LayoutHeroSection;
      'layout.references': LayoutReferences;
    }
  }
}
